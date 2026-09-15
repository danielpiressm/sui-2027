 "use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
export function SiteHeader() {
  const [open,setOpen] = useState(false);
  const links = [["About","/about"],["Call for Papers","/call-for-papers"],["Program","/program"],["Important Dates","/important-dates"],["Venue","/venue"],["Organizers","/organizers"],["Registration","/registration"]];
  return <header className="site-header"><div className="container nav"><Link className="brand" href="/"><span>ACM</span> SUI <b>2027</b></Link><button className="menu-btn" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button><nav className={open?"nav-links open":"nav-links"}>{links.map(([label,href])=><Link onClick={()=>setOpen(false)} href={href} key={href}>{label}</Link>)}</nav></div></header>
}