import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sandali Khan — Strategy & Business Consultant" },
      { name: "description", content: "MSc Management @ University of Manchester. Strategy consultant connecting finance, marketing & operations to drive 8–15% cost-saving outcomes." },
      { property: "og:title", content: "Sandali Khan — Strategy & Business Consultant" },
      { property: "og:description", content: "Multi-disciplinary operator: finance, marketing, consulting & content. Building, improving and growing businesses." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600;9..144,700;9..144,900&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" },
      { rel: "canonical", href: "/" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground grain">
      <Nav />
      <Hero />
      <Marquee />
      <Value />
      <Metrics />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="text-mono text-xs tracking-[0.2em] uppercase">SK / 2026</a>
        <nav className="hidden md:flex items-center gap-8 text-xs text-mono uppercase tracking-[0.18em]">
          <a href="#value" className="hover:text-accent transition">Value</a>
          <a href="#experience" className="hover:text-accent transition">Experience</a>
          <a href="#skills" className="hover:text-accent transition">Skills</a>
          <a href="#projects" className="hover:text-accent transition">Projects</a>
          <a href="#contact" className="hover:text-accent transition">Contact</a>
        </nav>
        <a href="#contact" className="text-mono text-xs uppercase tracking-[0.18em] bg-ink text-paper px-4 py-2 rounded-full hover:bg-accent transition">
          Let's talk →
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 text-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-10 reveal">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Available for Summer 2026 · Manchester, UK
        </div>

        <h1 className="text-display font-light leading-[0.92] tracking-tight text-[clamp(3rem,11vw,11rem)] reveal">
          Sandali
          <br />
          <span className="italic font-normal text-accent">Khan.</span>
        </h1>

        <div className="mt-12 grid md:grid-cols-12 gap-8 items-end">
          <p className="md:col-span-7 text-2xl md:text-3xl text-display font-light leading-snug reveal">
            Strategy & business consultant who sits on
            <em className="text-accent not-italic"> both sides </em>
            of the business table —
            <span className="underline decoration-accent decoration-2 underline-offset-4"> numbers, customers, and people.</span>
          </p>
          <div className="md:col-span-5 md:col-start-9 space-y-3 text-mono text-sm reveal">
            <Row label="Role" value="Strategy Consultant" />
            <Row label="Studying" value="MSc Management, Manchester" />
            <Row label="Track" value="Distinction · Academic Rep" />
            <Row label="Operating" value="Finance · Marketing · Ops" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b border-border pb-2">
      <span className="uppercase tracking-[0.15em] text-xs text-muted-foreground">{label}</span>
      <span className="text-foreground">{value}</span>
    </div>
  );
}

function Marquee() {
  const words = ["Hypothesis-Driven", "MECE Structuring", "Stakeholder Management", "Financial Modelling", "Root-Cause Diagnostics", "Cost Optimisation", "Power BI", "Market Sizing", "KPI Frameworks", "Growth Strategy"];
  const loop = [...words, ...words];
  return (
    <section className="border-y border-border bg-ink text-paper py-6 overflow-hidden">
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
    {
      n: "01",
      title: "Finance fluency",
      body: "Reads balance sheets, builds models, automates reporting. Numbers are a language, not a barrier.",
      tags: ["Financial Modelling", "Excel/SQL", "Power BI"],
    },
    {
      n: "02",
      title: "Marketer's instinct",
      body: "Three years growing a social platform. Understands audience, channel and conversion in practice.",
      tags: ["Audience Strategy", "SEO", "Content"],
    },
    {
      n: "03",
      title: "Operator's grit",
      body: "Founded a 600+ order e-commerce business. Owns P&L, ships product, fixes the broken bits.",
      tags: ["P&L Ownership", "Ops", "Iteration"],
    },
    {
      n: "04",
      title: "Diplomat's poise",
      body: "Diplomacy summits and leadership roles. Adapts communication style; finds solutions everyone signs.",
      tags: ["Stakeholders", "Negotiation", "Facilitation"],
    },
  ];
  return (
    <section id="value" className="px-6 py-28">
      <div className="max-w-7xl mx-auto">
        <SectionLabel n="(I)" label="What I bring" />
        <h2 className="text-display text-5xl md:text-7xl font-light leading-[1] mt-6 max-w-4xl">
          A rare overlap of <span className="italic text-accent">four</span> business functions, in one operator.
        </h2>
        <div className="grid md:grid-cols-2 gap-px bg-border mt-16 border border-border">
          {pillars.map((p) => (
            <div key={p.n} className="bg-background p-8 md:p-10 group hover:bg-card transition">
              <div className="flex items-baseline justify-between">
                <span className="text-mono text-xs text-muted-foreground tracking-[0.2em]">{p.n}</span>
                <span className="text-accent group-hover:translate-x-1 transition">→</span>
              </div>
              <h3 className="text-display text-3xl md:text-4xl mt-6 font-normal">{p.title}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{p.body}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-mono text-[10px] uppercase tracking-[0.15em] border border-border px-2.5 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  const m = [
    { v: "8–15%", l: "Cost-saving opportunities identified at Blackmont" },
    { v: "30–40%", l: "Manual reporting time cut via automation" },
    { v: "50%", l: "Platform growth uplift in 3 months" },
    { v: "600+", l: "Customised orders shipped, self-funded" },
  ];
  return (
    <section className="bg-ink text-paper px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <SectionLabel n="(II)" label="Impact, measured" light />
        <div className="grid md:grid-cols-4 gap-px bg-paper/15 mt-12 border border-paper/15">
          {m.map((x) => (
            <div key={x.l} className="bg-ink p-8">
              <div className="text-display text-6xl md:text-7xl text-accent font-light">{x.v}</div>
              <p className="mt-4 text-sm text-paper/70 leading-relaxed">{x.l}</p>
            </div>
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
      bullets: [
        "MECE issue-trees across 6+ engagements",
        "Power BI dashboards across 10 KPIs",
        "Reporting cycles cut by 9%",
      ],
    },
    {
      role: "Business Analyst",
      org: "Khaitan Fertilisers & Chemicals",
      where: "India",
      when: "Feb 2024 – Mar 2025",
      bullets: [
        "Root-cause analysis across 4 business units",
        "7% department cost reduction",
        "30% retention lift across content segments",
      ],
    },
    {
      role: "Founder & Business Owner",
      org: "The Pinterest Store",
      where: "Self-funded",
      when: "Jul 2019 – May 2022",
      bullets: [
        "Zero → 600+ customised orders",
        "80% organic traffic growth via SEO",
        "25% lift in repeat purchase rate",
      ],
    },
  ];
  return (
    <section id="experience" className="px-6 py-28">
      <div className="max-w-7xl mx-auto">
        <SectionLabel n="(III)" label="Experience" />
        <h2 className="text-display text-5xl md:text-6xl font-light mt-6 max-w-3xl">
          Three years <span className="italic text-accent">building, analysing & advising.</span>
        </h2>
        <div className="mt-16 divide-y divide-border border-y border-border">
          {xp.map((x, i) => (
            <article key={i} className="grid md:grid-cols-12 gap-6 py-10 group hover:bg-card transition">
              <div className="md:col-span-2 text-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">{x.when}</div>
              <div className="md:col-span-5">
                <h3 className="text-display text-2xl md:text-3xl">{x.role}</h3>
                <p className="text-muted-foreground mt-1">{x.org} · <span className="italic">{x.where}</span></p>
              </div>
              <ul className="md:col-span-5 space-y-2">
                {x.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm">
                    <span className="text-accent mt-1">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const groups = [
    { title: "Consulting", items: ["Hypothesis-driven problem solving", "MECE issue-tree structuring", "Market sizing", "Commercial assessment", "Root-cause diagnostics", "KPI frameworks"] },
    { title: "Strategy & Finance", items: ["Financial modelling", "Cost optimisation", "Pricing strategy", "Business growth", "Stakeholder management"] },
    { title: "Tools", items: ["Power BI", "Advanced Excel", "SQL", "Jira", "Odoo", "Notion", "PowerPoint", "Canva"] },
    { title: "Certifications", items: ["Business Analytics with AI — IIT Madras", "MySQL & Data Analytics — IIT Madras", "McKinsey Forward Program", "Advanced Excel — Coursera"] },
  ];
  return (
    <section id="skills" className="px-6 py-28 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto">
        <SectionLabel n="(IV)" label="Toolkit" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="text-display text-2xl mb-5 border-b border-ink pb-3">{g.title}</h3>
              <ul className="space-y-2.5">
                {g.items.map((i) => (
                  <li key={i} className="text-sm flex gap-2">
                    <span className="text-accent text-mono">+</span>{i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const p = [
    { title: "Organisational Restructuring Diagnostic", client: "Auditsu", date: "Mar 2026", tag: "Consulting", note: "6 structural inefficiencies → prioritised restructuring roadmap adopted by leadership." },
    { title: "Strategic Consulting Engagement", client: "Richmond Hope Foundation", date: "Jan 2026", tag: "Strategy", note: "Market & stakeholder analysis informing a 3-year strategic plan." },
    { title: "FinTech Business Research", client: "Alliance Manchester Business School", date: "Ongoing", tag: "Research", note: "Interdisciplinary evidence-based research on real-world FinTech challenges." },
  ];
  return (
    <section id="projects" className="px-6 py-28">
      <div className="max-w-7xl mx-auto">
        <SectionLabel n="(V)" label="Selected work" />
        <div className="mt-12 space-y-px bg-border border border-border">
          {p.map((x, i) => (
            <a key={i} href="#contact" className="bg-background grid md:grid-cols-12 gap-6 p-8 md:p-10 hover:bg-card transition group">
              <div className="md:col-span-1 text-mono text-xs text-muted-foreground">0{i + 1}</div>
              <div className="md:col-span-6">
                <span className="text-mono text-[10px] uppercase tracking-[0.2em] text-accent">{x.tag}</span>
                <h3 className="text-display text-2xl md:text-4xl mt-2 group-hover:italic transition">{x.title}</h3>
              </div>
              <div className="md:col-span-3 text-sm text-muted-foreground self-end">{x.client}</div>
              <div className="md:col-span-2 text-mono text-xs text-muted-foreground self-end text-right">{x.date}</div>
              <p className="md:col-span-11 md:col-start-2 text-muted-foreground text-sm leading-relaxed">{x.note}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-6 py-32 bg-ink text-paper">
      <div className="max-w-7xl mx-auto">
        <SectionLabel n="(VI)" label="Let's build" light />
        <h2 className="text-display text-6xl md:text-9xl font-light leading-[0.95] mt-8">
          Strategic thinking.
          <br />
          <span className="italic text-accent">Hands-on execution.</span>
          <br />
          From day one.
        </h2>

        <div className="mt-20 grid md:grid-cols-3 gap-10 border-t border-paper/20 pt-10">
          <ContactRow label="Email" value="sandalik1801@gmail.com" href="mailto:sandalik1801@gmail.com" />
          <ContactRow label="Phone" value="+44 7554 439352" href="tel:+447554439352" />
          <ContactRow label="LinkedIn" value="linkedin.com/in/sandalikhan" href="https://linkedin.com/in/sandalikhan" />
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <a href={href} className="group block">
      <div className="text-mono text-xs uppercase tracking-[0.2em] text-paper/50">{label}</div>
      <div className="mt-2 text-xl md:text-2xl text-display group-hover:text-accent transition flex items-center gap-2">
        {value} <span className="opacity-0 group-hover:opacity-100 transition">↗</span>
      </div>
    </a>
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
