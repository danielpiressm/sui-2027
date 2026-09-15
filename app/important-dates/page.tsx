import { importantDates } from "@/lib/content";
export default function Dates() {
  return <div className="page"><div className="container narrow"><p className="kicker">Plan ahead</p><h1>Important dates</h1><div className="timeline">{importantDates.map((d,i)=><div className="timeline-item" key={d.label}><div className="timeline-dot">{String(i+1).padStart(2,"0")}</div><div><span>{d.label}</span><h2>{d.date}</h2><p>{d.note}</p></div></div>)}</div></div></div>
}