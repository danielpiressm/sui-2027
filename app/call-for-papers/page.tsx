export default function CFP() {
  return <Page title="Call for Papers" kicker="Submissions">
    <div className="notice"><strong>Coming soon.</strong><br/>Official submission dates, topics, formatting requirements, and submission links will be published here.</div>
    <h2>Research papers</h2>
    <p>We invite original contributions that advance the state of the art in spatial user interaction. The final call will specify page limits, review model, and submission system.</p>
    <h2>Possible areas</h2>
    <ul className="topic-list"><li>Spatial user interfaces</li><li>VR / AR / MR interaction</li><li>Novel input and sensing</li><li>Haptics and multisensory interaction</li><li>Social and collaborative interaction</li><li>Accessibility and inclusive design</li><li>Spatial computing and AI</li></ul>
  </Page>
}
function Page({title,kicker,children}:{title:string,kicker:string,children:React.ReactNode}) {
  return <div className="page"><div className="container narrow"><p className="kicker">{kicker}</p><h1>{title}</h1><div className="prose">{children}</div></div></div>
}