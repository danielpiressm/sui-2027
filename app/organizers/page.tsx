const groups: Array<[string, string[]]> = [
  ["General Chair", ["Daniel Medeiros"]],
  ["Program Chairs", ["To be announced"]],
  ["Web Chair", ["To be announced"]],
  ["Publicity Chair", ["To be announced"]],
];

export default function Organizers() {
  return (
    <div className="page">
      <div className="container">
        <p className="kicker">The team</p>
        <h1>Organizers</h1>

        <div className="organizer-grid">
          {groups.map(([role, names]) => (
            <section className="org-card" key={role}>
              <span>{role}</span>

              {names.map((name) => (
                <h2 key={name}>{name}</h2>
              ))}
            </section>
          ))}
        </div>

        <p className="small-note">
          Replace the placeholders with the final organizing committee as
          appointments are confirmed.
        </p>
      </div>
    </div>
  );
}