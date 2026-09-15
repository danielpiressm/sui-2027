const groups = [
  ["General Chair", ["Daniel Pires de Sa Medeiros"]],
  ["Program Chairs", ["To be announced"]],
  ["Publicity Chairs", ["To be announced"]],
  ["Local Chairs", ["To be announced"]],
];
export default function Organizers() {
  return <div className="page"><div className="container"><p className="kicker">The team</p><h1>Organizers</h1><div className="organizer-grid">{groups.map(([role,names])=><section className="org-card" key={role}><span>{role}</span>{(names as string[]).map(n=><h2 key={n}>{n}</h2>)}</section>)}</div><p className="small-note">Replace the placeholders with the final organizing committee as appointments are confirmed.</p></div></div>
}