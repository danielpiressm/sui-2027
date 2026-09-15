import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin, Sparkles } from "lucide-react";
import { importantDates, news } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid" />
        <div className="container hero-inner">
          <div className="eyebrow"><Sparkles size={15} /> ACM SIGCHI</div>
          <h1>ACM Symposium on<br /><em>Spatial User Interaction</em></h1>
          <p className="hero-sub">SUI 2027 · Paris, France</p>
          <div className="hero-meta">
            <span><CalendarDays size={18} /> October XX–XX, 2027</span>
            <span><MapPin size={18} /> Paris, France</span>
          </div>
          <div className="hero-actions">
            <Link className="button button-dark" href="/call-for-papers">Call for Papers <ArrowRight size={17}/></Link>
            <Link className="button button-light" href="/program">Conference Program</Link>
          </div>
        </div>
        <div className="hero-orbit orbit-a" />
        <div className="hero-orbit orbit-b" />
        <div className="hero-orbit orbit-c" />
      </section>

      <section className="intro section">
        <div className="container two-col">
          <div>
            <p className="kicker">SUI 2027</p>
            <h2>Spatial interaction, in the heart of Paris.</h2>
          </div>
          <div className="lead">
            <p>The ACM Symposium on Spatial User Interaction brings together researchers and practitioners working across virtual, augmented, mixed, and other spatial computing environments.</p>
            <p>Join us in Paris for two days of research, demos, discussion, and community.</p>
            <Link className="text-link" href="/about">Learn more about SUI <ArrowRight size={16}/></Link>
          </div>
        </div>
      </section>

      <section className="announcement section-soft">
        <div className="container announcement-inner">
          <div>
            <p className="kicker">Latest</p>
            <h2>Save the date</h2>
            <p>More information about submissions, registration, and the venue will be announced soon.</p>
          </div>
          <Link className="button button-dark" href="/important-dates">Important dates <ArrowRight size={17}/></Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div><p className="kicker">Updates</p><h2>News & announcements</h2></div>
            <Link className="text-link" href="/news">All news <ArrowRight size={16}/></Link>
          </div>
          <div className="news-grid">
            {news.map((item) => (
              <article className="news-card" key={item.title}>
                <span>{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link href={item.href}>Read more <ArrowRight size={15}/></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dates-band">
        <div className="container">
          <div className="section-heading inverse">
            <div><p className="kicker">Plan ahead</p><h2>Important dates</h2></div>
            <Link className="text-link light-link" href="/important-dates">Full timeline <ArrowRight size={16}/></Link>
          </div>
          <div className="dates-grid">
            {importantDates.slice(0,4).map((d) => (
              <div className="date-card" key={d.label}>
                <span>{d.label}</span>
                <strong>{d.date}</strong>
                <small>{d.note}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="paris-section">
        <div className="paris-image">
          <div className="paris-overlay">
            <p className="kicker">Come to Paris</p>
            <h2>Research meets culture.</h2>
            <Link className="button button-light" href="/venue">Discover the venue</Link>
          </div>
        </div>
      </section>
    </>
  );
}