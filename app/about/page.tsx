export default function About() {
  return <Page title="About SUI 2027" kicker="The symposium">
    <p className="large-copy">The ACM Symposium on Spatial User Interaction (SUI) is a forum for research and practice around interaction with spatially situated digital information, environments, and systems.</p>
    <h2>What is SUI?</h2>
    <p>SUI brings together researchers and practitioners from human-computer interaction, computer graphics, virtual and augmented reality, ubiquitous computing, visualization, robotics, and related fields.</p>
    <p>The 2027 edition will take place in Paris, France. This starter intentionally leaves dates, venue details, and official submission information editable until the organizing committee confirms them.</p>
    <h2>Topics of interest</h2>
    <ul className="topic-list">
      <li>Spatial input devices and technologies</li><li>3D user interfaces and interaction techniques</li><li>Multimodal and multisensory interaction</li><li>Collaborative and social spatial interaction</li><li>Immersive analytics and visualization</li><li>Accessibility, inclusion, privacy, and ethics</li><li>AR, VR, MR, and emerging spatial platforms</li><li>AI and intelligent spatial interfaces</li>
    </ul>
  </Page>
}
function Page({title,kicker,children}:{title:string,kicker:string,children:React.ReactNode}) {
  return <div className="page"><div className="container narrow"><p className="kicker">{kicker}</p><h1>{title}</h1><div className="prose">{children}</div></div></div>
}