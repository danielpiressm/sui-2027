export default function Registration() {
  return <Page title="Registration" kicker="Attend">
    <div className="notice"><strong>Registration is not open yet.</strong><br/>Fees, deadlines, student rates, and the registration portal will appear here.</div>
    <h2>Registration categories</h2>
    <div className="price-grid"><div><span>ACM member</span><strong>€ TBD</strong></div><div><span>Non-member</span><strong>€ TBD</strong></div><div><span>Student</span><strong>€ TBD</strong></div></div>
  </Page>
}
function Page({title,kicker,children}:{title:string,kicker:string,children:React.ReactNode}) { return <div className="page"><div className="container narrow"><p className="kicker">{kicker}</p><h1>{title}</h1><div className="prose">{children}</div></div></div> }