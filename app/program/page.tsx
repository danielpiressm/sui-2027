export default function Program() {
  return <Page title="Program" kicker="Conference">
    <div className="notice"><strong>Program coming soon.</strong><br/>The detailed schedule will be published closer to the conference.</div>
    {["Day 1 — Welcome & Research","Day 2 — Research, Demos & Community"].map((day) =>
      <section className="program-day" key={day}><h2>{day}</h2><div className="program-row"><time>09:00</time><div><strong>Registration & coffee</strong><p>Details to be announced.</p></div></div><div className="program-row"><time>10:00</time><div><strong>Technical sessions</strong><p>Talks, demonstrations, and discussion.</p></div></div><div className="program-row"><time>18:00</time><div><strong>Social event</strong><p>Location to be announced.</p></div></div></section>
    )}
  </Page>
}
function Page({title,kicker,children}:{title:string,kicker:string,children:React.ReactNode}) { return <div className="page"><div className="container narrow"><p className="kicker">{kicker}</p><h1>{title}</h1><div className="prose">{children}</div></div></div> }