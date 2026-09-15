export default function Venue() {
  return <Page title="Venue & Paris" kicker="Travel">
    <p className="large-copy">SUI 2027 will be hosted in Paris. Final venue and travel information will be added once confirmed.</p>
    <div className="venue-placeholder"><div><span>PARIS</span><strong>Spatial computing<br/>in the city of light.</strong></div></div>
    <h2>Getting there</h2><p>Paris is served by Charles de Gaulle and Orly airports and has extensive rail connections. Detailed directions, accommodation recommendations, and accessibility information will be published here.</p>
  </Page>
}
function Page({title,kicker,children}:{title:string,kicker:string,children:React.ReactNode}) { return <div className="page"><div className="container narrow"><p className="kicker">{kicker}</p><h1>{title}</h1><div className="prose">{children}</div></div></div> }