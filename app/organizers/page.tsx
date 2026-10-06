import Image from "next/image";

const organizerGroups = [
  {
    role: "General Chair",
    people: [
      {
        name: "Huyen Nguyen",
        institution: "Université Paris Saclay",
        photo: "/organizers/huyen.png",
      },
	  {
        name: "Daniel Medeiros",
        institution: "Télécom Paris, Institut Polytechnique de Paris",
        photo: "/organizers/daniel.jpeg",
      },
    ],
  },
  {
    role: "Program Chairs",
    people: [
      {
        name: "Xubo Wang",
        institution: "University of Example",
        photo: "/organizers/xubo.jpg",
      },
   ],
  },
];

export default function Organizers() {
  return (
    <div className="page">
      <div className="container">
        <p className="kicker">The team</p>
        <h1>Organizers</h1>

        <div className="organizer-groups">
          {organizerGroups.map((group) => (
            <section className="organizer-group" key={group.role}>
              <h2 className="organizer-role">{group.role}</h2>

              <div className="organizer-people">
                {group.people.map((person) => (
                  <div className="organizer-person" key={person.name}>
                    <Image
                      src={person.photo}
                      alt={person.name}
                      width={180}
                      height={180}
                      className="organizer-photo"
                    />

                    <h3>{person.name}</h3>

                    <p className="organizer-institution">
                      {person.institution}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="small-note">
          The organizing committee will be updated as appointments are confirmed.
        </p>
      </div>
    </div>
  );
}
