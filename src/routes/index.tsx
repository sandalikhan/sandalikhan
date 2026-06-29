import { createFileRoute } from "@tanstack/react-router";
import { motion, useSpring, useTransform, useScroll, AnimatePresence } from "framer-motion";
import { useState } from "react";
import sandaliAsset from "@/assets/sandali.png.asset.json";
import introVideoAsset from "@/assets/sandali-intro.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sandali Khan — Strategy & Business Consultant" },
      { name: "description", content: "MSc Management @ University of Manchester. Strategy consultant connecting finance, marketing & operations." },
      { property: "og:title", content: "Sandali Khan — Strategy & Business Consultant" },
      { property: "og:description", content: "Multi-disciplinary operator: finance, marketing, consulting & content." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: sandaliAsset.url },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,ital,wght@9..144,0,300..900;9..144,1,300..900&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" },
      { rel: "canonical", href: "/" },
    ],
  }),
  component: Portfolio,
});

const LINKEDIN = "https://linkedin.com/in/sandalikhan";
const INSTAGRAM = "https://www.instagram.com/the_.pinterest._store?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
const EMAIL = "mailto:sandalik1801@gmail.com";

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground grain overflow-x-hidden">
      <ScrollBar />
      <Nav />
      <Hero />
      <Marquee />
      <Value />
      <Metrics />
      <Experience />
      <Skills />
      <Projects />
      <VideoIntro />
      <WhyMe />
      <Contact />
      <Footer />
    </div>
  );
}

function ScrollBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-[3px] bg-accent z-[60] origin-left" />;
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#value", label: "Value" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#why", label: "Why Me" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="fixed top-[3px] inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="text-mono text-xs tracking-[0.2em] uppercase font-medium">SK / 2026</a>
        <nav className="hidden md:flex items-center gap-8 text-xs text-mono uppercase tracking-[0.18em]">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="relative group">
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-flex text-mono text-xs uppercase tracking-[0.18em] bg-ink text-paper px-4 py-2 rounded-full hover:bg-accent transition items-center gap-2">
          Let's talk <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
        </a>
        <button onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} className="md:hidden relative w-9 h-9 flex items-center justify-center">
          <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 0 : -5 }} transition={{ duration: 0.3 }} className="absolute block w-6 h-px bg-ink" />
          <motion.span animate={{ opacity: open ? 0 : 1 }} transition={{ duration: 0.2 }} className="absolute block w-6 h-px bg-ink" />
          <motion.span animate={{ rotate: open ? -45 : 0, y: open ? 0 : 5 }} transition={{ duration: 0.3 }} className="absolute block w-6 h-px bg-ink" />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }} className="md:hidden overflow-hidden bg-background border-t border-border">
            <div className="px-6 py-5 flex flex-col gap-4 text-mono uppercase tracking-[0.2em] text-sm">
              {links.map((l, i) => (
                <motion.a key={l.href} href={l.href} onClick={() => setOpen(false)} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 + i * 0.04 }}>{l.label}</motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="pt-32 pb-20 px-6 relative">
      <FloatingShapes />
      <div className="max-w-7xl mx-auto relative">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 text-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-10">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Manchester, UK
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 order-2 md:order-1">
            <h1 className="text-display font-normal leading-[0.82] tracking-[-0.04em] text-[clamp(4.5rem,15vw,14rem)]">
              <RevealText text="Sandali" />
              <br />
              <RevealText text="Khan." italic accent delay={0.3} />
            </h1>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1], delay: 0.2 }}
            className="md:col-span-4 order-1 md:order-2 relative"
          >
            <motion.div whileHover={{ rotate: 2, scale: 1.02 }} transition={{ type: "spring", stiffness: 200 }} className="relative aspect-[4/5] max-w-[320px] md:max-w-none mx-auto">
              <div className="absolute -inset-3 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute inset-0 border border-ink rounded-[40%_60%_55%_45%/50%_45%_55%_50%] overflow-hidden">
                <img src={sandaliAsset.url} alt="Sandali Khan" className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700" />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 w-24 h-24 text-mono text-[10px] uppercase tracking-[0.25em] text-ink"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <path id="circle" d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
                  </defs>
                  <text fill="currentColor">
                    <textPath href="#circle">STRATEGY · CONSULTING · GROWTH · </textPath>
                  </text>
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-accent text-2xl">✦</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-16 grid md:grid-cols-12 gap-8 items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-7 text-2xl md:text-3xl text-display font-light leading-snug"
          >
            I sit on
            <em className="text-accent not-italic"> both sides </em>
            of the business table —
            <span className="underline decoration-accent decoration-2 underline-offset-4"> numbers, customers, and people.</span>
          </motion.p>
          <div className="md:col-span-5 md:col-start-9 space-y-3 text-mono text-sm">
            <Row label="Role" value="Strategy Consultant" />
            <Row label="Studying" value="MSc Management, Manchester" />
            <Row label="Track" value="Distinction · Academic Rep" />
            <Row label="Operating" value="Finance · Marketing · Ops" />
          </div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-16 flex flex-wrap gap-3">
          <CTA href="#why" primary>Why interview me</CTA>
          <CTA href="#projects">See projects</CTA>
          <CTA href={LINKEDIN} external>LinkedIn ↗</CTA>
        </motion.div>
      </div>
    </section>
  );
}

function CTA({ href, children, primary, external }: { href: string; children: React.ReactNode; primary?: boolean; external?: boolean }) {
  return (
    <motion.a
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`text-mono text-xs uppercase tracking-[0.2em] px-5 py-3 rounded-full border transition ${
        primary ? "bg-ink text-paper border-ink hover:bg-accent hover:border-accent" : "border-ink/40 hover:border-accent hover:text-accent"
      }`}
    >
      {children}
    </motion.a>
  );
}

function RevealText({ text, italic, accent, delay = 0 }: { text: string; italic?: boolean; accent?: boolean; delay?: number }) {
  return (
    <span className="inline-block overflow-hidden align-bottom">
      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay, ease: [0.2, 0.8, 0.2, 1] }}
        className={`inline-block ${italic ? "italic font-normal" : ""} ${accent ? "text-accent" : ""}`}
      >
        {text}
      </motion.span>
    </span>
  );
}

function FloatingShapes() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div animate={{ y: [0, 20, 0], rotate: [0, 10, 0] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-40 left-10 w-3 h-3 rounded-full bg-accent" />
      <motion.div animate={{ y: [0, -30, 0], rotate: [0, -15, 0] }} transition={{ duration: 13, repeat: Infinity }} className="absolute top-60 right-20 w-6 h-6 border-2 border-ink rotate-45" />
      <motion.div animate={{ y: [0, 25, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute bottom-20 left-1/3 w-4 h-4 rounded-full border-2 border-accent" />
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex justify-between border-b border-border pb-2">
      <span className="uppercase tracking-[0.15em] text-xs text-muted-foreground">{label}</span>
      <span className="text-foreground">{value}</span>
    </motion.div>
  );
}

function Marquee() {
  const words = ["Hypothesis-Driven", "MECE Structuring", "Stakeholder Management", "Financial Modelling", "Root-Cause Diagnostics", "Cost Optimisation", "Power BI", "Market Sizing", "KPI Frameworks", "Growth Strategy"];
  const loop = [...words, ...words];
  return (
    <section className="border-y border-border bg-ink text-paper py-6 overflow-hidden edge-fade">
      <div className="flex marquee whitespace-nowrap">
        {loop.map((w, i) => (
          <span key={i} className="text-display text-3xl md:text-5xl px-8 italic font-light">
            {w} <span className="text-accent not-italic">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

function Value() {
  const pillars = [
    { n: "01", title: "Finance fluency", body: "Reads balance sheets, builds models, automates reporting. Numbers are a language, not a barrier.", tags: ["Financial Modelling", "Excel/SQL", "Power BI"], proof: "30–40% reporting time cut via Excel automation at Khaitan." },
    { n: "02", title: "Marketer's instinct", body: "Three years growing a social platform. Audience, channel, conversion — in practice, not theory.", tags: ["Audience Strategy", "SEO", "Content"], proof: "30% retention lift across 4 content segments. 18% MoM traffic growth." },
    { n: "03", title: "Operator's grit", body: "Founded a 600+ order e-commerce business. Owns the P&L, ships the product, fixes the broken bits.", tags: ["P&L Ownership", "Ops", "Iteration"], proof: "80% organic traffic growth · 25% repeat purchase lift. Self-funded." },
    { n: "04", title: "Diplomat's poise", body: "Diplomacy summits and leadership roles. Adapts communication style; finds solutions everyone signs.", tags: ["Stakeholders", "Negotiation", "Facilitation"], proof: "Elected Academic Rep for 105 students; led 12+ multicultural teams." },
  ];
  const [active, setActive] = useState<string | null>(null);
  return (
    <section id="value" className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <SectionLabel n="(I)" label="What I bring" />
        <h2 className="text-display text-5xl md:text-7xl font-light leading-[1] mt-6 max-w-4xl">
          A rare overlap of <span className="italic text-accent">four</span> business functions, in one operator.
        </h2>
        <p className="mt-4 text-muted-foreground text-sm text-mono uppercase tracking-[0.2em]">↓ Click a card to expand</p>
        <div className="grid md:grid-cols-2 gap-px bg-border mt-10 border border-border">
          {pillars.map((p) => {
            const open = active === p.n;
            return (
              <motion.button
                key={p.n}
                onClick={() => setActive(open ? null : p.n)}
                className="bg-background p-8 md:p-10 text-left group hover:bg-card transition lift"
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-baseline justify-between">
                  <span className="text-mono text-xs text-muted-foreground tracking-[0.2em]">{p.n}</span>
                  <motion.span animate={{ rotate: open ? 45 : 0 }} className="text-accent text-2xl">+</motion.span>
                </div>
                <h3 className="text-display text-3xl md:text-4xl mt-6 font-normal">{p.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{p.body}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-mono text-[10px] uppercase tracking-[0.15em] border border-border px-2.5 py-1 rounded-full">{t}</span>
                  ))}
                </div>
                <AnimatePresence>
                  {open && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="mt-6 p-4 bg-accent/10 border-l-2 border-accent">
                        <p className="text-mono text-xs uppercase tracking-[0.15em] text-accent mb-2">Proof</p>
                        <p className="text-sm">{p.proof}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string; duration?: number }) {
  return <span>{to}{suffix}</span>;
}

function Metrics() {
  const m = [
    { v: 15, suffix: "%", l: "Cost-saving opportunities identified", sub: "Blackmont Consulting" },
    { v: 40, suffix: "%", l: "Manual reporting time cut", sub: "Khaitan Fertilisers" },
    { v: 50, suffix: "%", l: "Platform growth uplift in 3 months", sub: "Change management" },
    { v: 600, suffix: "+", l: "Customised orders shipped", sub: "Self-funded e-commerce" },
  ];
  return (
    <section className="bg-ink text-paper px-6 py-20 relative overflow-hidden">
      <motion.div animate={{ x: [0, 100, 0], y: [0, -50, 0] }} transition={{ duration: 20, repeat: Infinity }} className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="max-w-7xl mx-auto relative">
        <SectionLabel n="(II)" label="Impact, measured" light />
        <div className="grid md:grid-cols-4 gap-px bg-paper/15 mt-12 border border-paper/15">
          {m.map((x, i) => (
            <motion.div
              key={x.l}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-ink p-8 lift hover:bg-ink/90"
            >
              <div className="text-display text-6xl md:text-7xl text-accent font-light">
                <Counter to={x.v} suffix={x.suffix} />
              </div>
              <p className="mt-4 text-sm text-paper leading-relaxed">{x.l}</p>
              <p className="mt-1 text-mono text-[10px] uppercase tracking-[0.2em] text-paper/50">{x.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const xp = [
    {
      role: "Strategic Business Consultant",
      org: "Blackmont Consulting",
      where: "UK",
      when: "Dec 2025 – Feb 2026",
      headline: "Built decision-grade strategy work across 6+ client engagements.",
      bullets: [
        "Structured 6+ engagements with MECE issue-trees & hypothesis-driven analysis",
        "Identified 8–15% cost-saving opportunities for clients",
        "Power BI dashboards across 10 KPIs — reporting cycles down 9%",
      ],
    },
    {
      role: "Business Analyst",
      org: "Khaitan Fertilisers & Chemicals",
      where: "India",
      when: "Feb 2024 – Mar 2025",
      headline: "Turned messy operational data into 7% real cost reduction.",
      bullets: [
        "Root-cause analysis across 4 business units",
        "Automated reporting — 30–40% time saved, errors eliminated",
        "Applied ADKAR change model — 50% growth uplift in 3 months",
      ],
    },
    {
      role: "Founder & Business Owner",
      org: "The Pinterest Store",
      where: "Self-funded",
      when: "Jul 2019 – May 2022",
      headline: "Built a real, profitable business — zero to 600+ orders.",
      bullets: [
        "End-to-end P&L ownership, no paid acquisition",
        "80% organic traffic growth via SEO & content",
        "25% lift in repeat purchase rate via insight loops",
      ],
    },
  ];
  const [tab, setTab] = useState(0);
  const active = xp[tab];
  return (
    <section id="experience" className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <SectionLabel n="(III)" label="Experience" />
        <h2 className="text-display text-5xl md:text-6xl font-light mt-6 max-w-3xl">
          Three years <span className="italic text-accent">building, analysing & advising.</span>
        </h2>

        <div className="mt-12 flex flex-wrap gap-2">
          {xp.map((x, i) => (
            <button
              key={i}
              onClick={() => setTab(i)}
              className={`text-mono text-xs uppercase tracking-[0.15em] px-4 py-3 rounded-full border transition ${
                tab === i ? "bg-ink text-paper border-ink" : "border-ink/30 hover:border-accent"
              }`}
            >
              {x.org}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.article
            key={tab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="mt-10 grid md:grid-cols-12 gap-8 border-t border-border pt-10"
          >
            <div className="md:col-span-4">
              <div className="text-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">{active.when}</div>
              <h3 className="text-display text-3xl md:text-4xl mt-3">{active.role}</h3>
              <p className="text-muted-foreground mt-2">{active.org} · <span className="italic">{active.where}</span></p>
            </div>
            <div className="md:col-span-8">
              <p className="text-display text-2xl md:text-3xl font-light leading-snug">{active.headline}</p>
              <ul className="mt-8 space-y-4">
                {active.bullets.map((b, i) => (
                  <motion.li
                    key={b}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    className="flex gap-4 border-b border-border pb-4"
                  >
                    <span className="text-accent text-mono text-xs mt-1">0{i + 1}</span>
                    <span className="text-base">{b}</span>
                  </motion.li>
                ))}
              </ul>
              {active.role === "Founder & Business Owner" && (
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-8 text-mono text-xs uppercase tracking-[0.15em] border border-accent px-4 py-2.5 rounded-full hover:bg-accent hover:text-paper transition"
                >
                  Visit The Pinterest Store <span>↗</span>
                </motion.a>
              )}
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  );
}

function Skills() {
  const groups = [
    { key: "all", label: "All" },
    { key: "consulting", label: "Consulting" },
    { key: "finance", label: "Finance" },
    { key: "tools", label: "Tools" },
    { key: "certs", label: "Certifications" },
  ];
  const items = [
    { k: "consulting", t: "Hypothesis-Driven Problem Solving" },
    { k: "consulting", t: "MECE Issue-Trees" },
    { k: "consulting", t: "Market Sizing" },
    { k: "consulting", t: "Root-Cause Diagnostics" },
    { k: "consulting", t: "KPI Frameworks" },
    { k: "finance", t: "Financial Modelling" },
    { k: "finance", t: "Cost Optimisation" },
    { k: "finance", t: "Pricing Strategy" },
    { k: "finance", t: "Stakeholder Management" },
    { k: "tools", t: "Power BI" },
    { k: "tools", t: "Advanced Excel" },
    { k: "tools", t: "SQL" },
    { k: "tools", t: "Jira" },
    { k: "tools", t: "Odoo" },
    { k: "tools", t: "Notion" },
    { k: "certs", t: "Business Analytics with AI — IIT Madras" },
    { k: "certs", t: "MySQL & Data Analytics — IIT Madras" },
    { k: "certs", t: "McKinsey Forward Program" },
    { k: "certs", t: "Advanced Excel — Coursera" },
  ];
  const [filter, setFilter] = useState("all");
  const visible = items.filter((i) => filter === "all" || i.k === filter);
  return (
    <section id="skills" className="px-6 py-20 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto">
        <SectionLabel n="(IV)" label="Toolkit" />
        <h2 className="text-display text-5xl md:text-6xl font-light mt-6">Pick a <span className="italic text-accent">lens</span>.</h2>
        <div className="mt-10 flex flex-wrap gap-2">
          {groups.map((g) => (
            <button
              key={g.key}
              onClick={() => setFilter(g.key)}
              className={`text-mono text-xs uppercase tracking-[0.15em] px-4 py-2.5 rounded-full border transition ${
                filter === g.key ? "bg-accent text-paper border-accent" : "border-ink/30 hover:border-accent"
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>
        <motion.div layout className="mt-10 flex flex-wrap gap-3">
          <AnimatePresence>
            {visible.map((i) => (
              <motion.span
                key={i.t}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ y: -3, backgroundColor: "var(--accent)", color: "var(--paper)" }}
                className="text-sm border border-ink/40 px-4 py-2 rounded-full cursor-default"
              >
                {i.t}
              </motion.span>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function Projects() {
  const p = [
    { title: "Organisational Restructuring Diagnostic", client: "Auditsu", date: "Mar 2026", tag: "Consulting", note: "Full MECE diagnostic surfaced 6 structural inefficiencies. Delivered a prioritised restructuring roadmap — adopted by senior leadership." },
    { title: "Strategic Consulting Engagement", client: "Richmond Hope Foundation", date: "Jan 2026", tag: "Strategy", note: "Market assessment + stakeholder analysis. Tested strategic hypotheses to identify mission-delivery gaps that shaped the 3-year strategic plan." },
    { title: "FinTech Business Research", client: "Alliance Manchester Business School", date: "Ongoing", tag: "Research", note: "Interdisciplinary research analysing real-world FinTech challenges using evidence-based methodology." },
    { title: "The Pinterest Store", client: "Self-funded venture", date: "2019 – 2022", tag: "Founder", note: "Zero to 600+ orders. SEO-driven 80% organic growth. 25% repeat purchase lift. Living proof of execution.", href: INSTAGRAM },
  ];
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="projects" className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <SectionLabel n="(V)" label="Selected work" />
        <h2 className="text-display text-5xl md:text-6xl font-light leading-[0.95] mt-6 max-w-3xl">Strategy that <span className="italic text-accent">shipped.</span></h2>
        <p className="mt-3 text-muted-foreground text-sm text-mono uppercase tracking-[0.2em]">↓ Click any project to expand</p>
        <div className="mt-10 space-y-px bg-border border border-border">
          {p.map((x, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="bg-background lift">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full grid md:grid-cols-12 gap-6 p-8 md:p-10 text-left group hover:bg-card transition"
                >
                  <div className="md:col-span-1 text-mono text-xs text-muted-foreground">0{i + 1}</div>
                  <div className="md:col-span-6">
                    <span className="text-mono text-[10px] uppercase tracking-[0.2em] text-accent">{x.tag}</span>
                    <h3 className="text-display text-2xl md:text-4xl mt-2 leading-[1.05] flex items-center gap-3">
                      {x.title}
                      <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="text-accent text-2xl">+</motion.span>
                    </h3>
                  </div>
                  <div className="md:col-span-3 text-sm text-muted-foreground self-end">{x.client}</div>
                  <div className="md:col-span-2 text-mono text-xs text-muted-foreground self-end text-right">{x.date}</div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 md:px-10 pb-10 grid md:grid-cols-12 gap-6">
                        <div className="md:col-span-11 md:col-start-2">
                          <div className="border-l-2 border-accent pl-5 py-1">
                            <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-2">Outcome</p>
                            <p className="text-base md:text-lg leading-relaxed">{x.note}</p>
                          </div>
                          <div className="mt-6 flex flex-wrap gap-3">
                            {x.href && (
                              <a href={x.href} target="_blank" rel="noopener noreferrer" className="text-mono text-xs uppercase tracking-[0.2em] border border-accent text-accent px-4 py-2.5 rounded-full hover:bg-accent hover:text-paper transition">
                                Visit live ↗
                              </a>
                            )}
                            <a href="#contact" className="text-mono text-xs uppercase tracking-[0.2em] bg-ink text-paper px-4 py-2.5 rounded-full hover:bg-accent transition">
                              Get in touch →
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-6 py-24 bg-ink text-paper relative overflow-hidden">
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full border border-paper/10" />
      <div className="max-w-7xl mx-auto relative">
        <SectionLabel n="(VII)" label="Let's build" light />
        <h2 className="text-display text-6xl md:text-9xl font-light leading-[0.95] mt-8">
          Strategic thinking.
          <br />
          <span className="italic text-accent">Hands-on execution.</span>
          <br />
          From day one.
        </h2>

        <div className="mt-20 grid md:grid-cols-2 gap-10 border-t border-paper/20 pt-10">
          <ContactRow label="Email" value="sandalik1801@gmail.com" href={EMAIL} />
          <ContactRow label="LinkedIn" value="/in/sandalikhan" href={LINKEDIN} />
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <motion.a whileHover={{ x: 5 }} href={href} target="_blank" rel="noopener noreferrer" className="group block">
      <div className="text-mono text-xs uppercase tracking-[0.2em] text-paper/50">{label}</div>
      <div className="mt-2 text-xl md:text-2xl text-display group-hover:text-accent transition flex items-center gap-2">
        {value} <span className="opacity-0 group-hover:opacity-100 transition">↗</span>
      </div>
    </motion.a>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-paper/60 border-t border-paper/20 px-6 py-8 text-mono text-xs uppercase tracking-[0.2em] flex flex-wrap justify-between gap-4">
      <span>© 2026 Sandali Khan</span>
      <span>Manchester · United Kingdom</span>
      <span>Designed with intent</span>
    </footer>
  );
}

function SectionLabel({ n, label, light }: { n: string; label: string; light?: boolean }) {
  return (
    <div className={`flex items-center gap-4 text-mono text-xs uppercase tracking-[0.25em] ${light ? "text-paper/60" : "text-muted-foreground"}`}>
      <span>{n}</span>
      <span className={`h-px w-12 ${light ? "bg-paper/40" : "bg-ink"}`} />
      <span>{label}</span>
    </div>
  );
}

function WhyMe() {
  const reasons = [
    { k: "01", t: "I've sat in every seat", d: "Founder, analyst, consultant, marketer. I don't need a translator between functions — I am the translator." },
    { k: "02", t: "I ship, not just slide", d: "600+ orders shipped, dashboards live in production, recommendations adopted by senior leadership. Strategy that left the deck." },
    { k: "03", t: "Numbers are my native tongue", d: "Financial modelling, SQL, Power BI. I'll find the 8–15% saving everyone missed because they stopped at the summary row." },
    { k: "04", t: "I move at startup speed", d: "Cut reporting time 30–40%. Drove 50% growth in 3 months. I optimise the loop, not just the output." },
    { k: "05", t: "I bring the room with me", d: "Elected academic rep for 105 students. Led 12+ multicultural teams. Stakeholders trust me because I listen first, structure second." },
  ];
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 90]);
  return (
    <section id="why" className="px-6 py-20 relative overflow-hidden">
      <motion.div style={{ rotate }} className="absolute -left-40 top-20 w-[500px] h-[500px] rounded-full border border-accent/20 pointer-events-none" />
      <motion.div style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, -120]) }} className="absolute -right-32 bottom-10 w-[400px] h-[400px] rounded-[40%_60%_55%_45%] border border-ink/15 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <SectionLabel n="(VI)" label="Why interview me" />
        <h2 className="text-display text-5xl md:text-7xl font-light leading-[1] mt-6 max-w-4xl">
          You'll meet a lot of candidates. <span className="italic text-accent">Here's what makes me different.</span>
        </h2>

        <div className="mt-16 space-y-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.k}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
              whileHover={{ x: 10 }}
              className="group grid md:grid-cols-12 gap-6 items-baseline border-b border-border pb-6 cursor-default"
            >
              <div className="md:col-span-1 text-mono text-xs text-accent tracking-[0.2em]">{r.k}</div>
              <h3 className="md:col-span-4 text-display text-2xl md:text-3xl font-normal group-hover:text-accent transition-colors">{r.t}</h3>
              <p className="md:col-span-7 text-muted-foreground leading-relaxed">{r.d}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 relative overflow-hidden rounded-3xl border border-ink bg-ink text-paper p-10 md:p-16"
        >
          <motion.div
            animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent/30 blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-accent/15 blur-3xl"
          />
          <div className="relative grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <p className="text-mono text-xs uppercase tracking-[0.25em] text-paper/60">Ready when you are</p>
              <h3 className="text-display text-4xl md:text-6xl font-light mt-4 leading-[1]">
                Let's get on a <span className="italic text-accent">15-minute call.</span>
              </h3>
              <p className="mt-4 text-paper/70 max-w-xl">No formal cover letter. No fluff. Just a conversation about how I'd add value to your team from week one.</p>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <motion.a
                href={EMAIL}
                whileHover={{ scale: 1.05, rotate: -1 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 bg-accent text-paper text-mono text-xs uppercase tracking-[0.2em] px-7 py-5 rounded-full shadow-lg"
              >
                Book me in
                <motion.span animate={{ x: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.4 }}>→</motion.span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
