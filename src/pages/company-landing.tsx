import {
  Activity,
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Network,
  ShieldCheck,
  Users,
  Wifi,
} from "lucide-react";

const solutionGroups = [
  {
    number: "01",
    eyebrow: "PLAN & BUILD",
    title: "Design & Build",
    description: "Put the physical and network foundations in place for reliable work across your sites.",
    icon: Network,
    services: [
      "Network infrastructure",
      "Structured cabling & fiber",
      "Wireless & Wi-Fi systems",
      "Wi-Fi surveys & design",
      "Data center infrastructure",
      "Physical security & low voltage",
      "AI and high-performance computing foundations",
    ],
  },
  {
    number: "02",
    eyebrow: "OPERATE & PROTECT",
    title: "Manage & Secure",
    description: "Keep core systems supported, protected, and ready as your operation changes.",
    icon: ShieldCheck,
    services: [
      "Managed IT services",
      "Cybersecurity",
      "Cloud & hybrid infrastructure",
      "Unified communications",
    ],
  },
  {
    number: "03",
    eyebrow: "ADVISE & DELIVER",
    title: "Advise & Staff",
    description: "Connect business requirements to technical planning, project delivery, and the right field expertise.",
    icon: Users,
    services: [
      "Enterprise IT advisory",
      "Professional services & consulting",
      "Technical workforce solutions",
      "Compliance consulting",
      "Technology sourcing & procurement",
    ],
  },
];

const industries = [
  "Government & public sector",
  "Education",
  "Enterprise & commercial",
  "Healthcare",
  "Financial services",
  "Retail & hospitality",
  "Manufacturing",
  "Logistics & distribution",
  "Telecommunications",
  "Data centers",
  "Energy & utilities",
  "Commercial real estate",
];

const lifecycle = [
  ["01", "Discover", "Align on goals, sites, constraints, and the work that needs to get done."],
  ["02", "Design", "Turn requirements into a practical infrastructure plan."],
  ["03", "Engineer", "Define equipment, materials, sequencing, and documentation."],
  ["04", "Deploy", "Coordinate teams and execute the installation at each location."],
  ["05", "Integrate", "Connect systems and verify the expected operation."],
  ["06", "Support", "Keep service and field needs connected after installation."],
  ["07", "Improve", "Use project feedback to guide the next upgrade or rollout."],
];

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a className="company-brand" href="/" aria-label="Tekstein LLC home">
      <img
        src={light ? "/tekstein-logo-reverse.svg" : "/tekstein-logo.svg"}
        alt="Tekstein"
        fetchPriority="high"
        decoding="async"
      />
      <span>LLC</span>
    </a>
  );
}

function HeroGraphic() {
  return (
    <div className="company-hero-visual" aria-label="Illustration of a connected infrastructure project">
      <div className="company-visual-top">
        <span className="company-status"><i /> NETWORK DELIVERY</span>
        <span className="company-visual-index">TS / 001</span>
      </div>
      <svg viewBox="0 0 680 440" role="img" aria-label="A building and network sites connected through a central infrastructure point">
        <defs>
          <linearGradient id="lineGlow" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#FFFFFF" stopOpacity=".85" />
            <stop offset="1" stopColor="#B9C7FF" stopOpacity=".35" />
          </linearGradient>
          <linearGradient id="panelGlow" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#AC002A" stopOpacity=".9" />
            <stop offset="1" stopColor="#AC002A" stopOpacity=".4" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#lineGlow)" strokeWidth="2">
          <path d="M82 328h156l57-61h101l74-78h128" />
          <path d="M238 328v-93l57-44v76" />
          <path d="M396 267v-86l74-54v62" />
          <path d="M268 191h-54v44M436 181h46v-47" />
          <path d="M514 189v-40h74v40" />
          <path d="M80 328v-39h50v39M105 289v-38h44v38M505 267h92" opacity=".45" />
        </g>
        <g fill="#080B4D" stroke="#FFFFFF" strokeWidth="2">
          <rect x="72" y="328" width="172" height="42" rx="8" />
          <rect x="281" y="238" width="110" height="58" rx="8" />
          <rect x="444" y="137" width="108" height="54" rx="8" />
          <circle cx="238" cy="328" r="12" />
          <circle cx="295" cy="235" r="12" />
          <circle cx="396" cy="267" r="12" />
          <circle cx="470" cy="189" r="12" />
          <circle cx="598" cy="189" r="12" />
        </g>
        <g fill="url(#panelGlow)">
          <circle cx="238" cy="328" r="5" />
          <circle cx="295" cy="235" r="5" />
          <circle cx="396" cy="267" r="5" />
          <circle cx="470" cy="189" r="5" />
          <circle cx="598" cy="189" r="5" />
        </g>
        <g fill="#FFFFFF">
          <path d="M99 354v-11h10v11m8 0v-18h10v18m8 0v-12h10v12" opacity=".9" />
          <path d="M308 278h13v-22h14v22h13v10h-40z" opacity=".9" />
          <path d="M468 173a18 18 0 0 1 36 0h-6a12 12 0 0 0-24 0zm8-8a10 10 0 0 1 20 0h-6a4 4 0 0 0-8 0z" />
          <circle cx="486" cy="174" r="3" />
        </g>
      </svg>
      <div className="company-visual-caption">
        <span>Survey</span><b /><span>Design</span><b /><span>Deploy</span><b /><span>Verify</span>
      </div>
      <div className="company-visual-note">
        <span className="company-note-icon"><CheckCircle2 size={17} /></span>
        <span><strong>Built to work together</strong><small>Infrastructure, field teams, and project delivery</small></span>
      </div>
    </div>
  );
}

export default function CompanyLanding() {
  return (
    <div className="company-site">
      <div className="company-utility">
        <div className="company-container company-utility-inner">
          <span>CONNECTED INFRASTRUCTURE. DELIVERED WITH INTENT.</span>
          <a href="/workforce/" aria-label="Workforce technician sign in">Workforce sign in <ArrowUpRight size={13} /></a>
        </div>
      </div>
      <header className="company-header">
        <div className="company-container company-header-inner">
          <Brand light />
          <nav aria-label="Main navigation">
            <a href="#solutions">What we do</a>
            <a href="#industries">Industries</a>
            <a href="#delivery">How we deliver</a>
            <a href="#field-team">Field operations</a>
          </nav>
          <a className="company-header-cta" href="#contact">Start a project <ArrowRight size={15} /></a>
        </div>
      </header>

      <main>
        <section className="company-hero">
          <div className="company-hero-grid" aria-hidden="true" />
          <div className="company-container company-hero-inner">
            <div className="company-hero-copy">
              <div className="company-kicker"><span /> NETWORKS · WIRELESS · FIELD DELIVERY</div>
              <h1>Infrastructure that keeps your business <em>connected.</em></h1>
              <p className="company-hero-lede">Tekstein brings network design, installation, and field execution into one coordinated delivery path—from the first site conversation through a documented handoff.</p>
              <div className="company-hero-actions">
                <a className="company-button company-button--primary" href="#solutions">Explore capabilities <ArrowRight size={17} /></a>
                <a className="company-button company-button--outline" href="#contact">Discuss a project</a>
              </div>
              <div className="company-hero-proof">
                <span><CheckCircle2 size={16} /> Clear project scope</span>
                <span><CheckCircle2 size={16} /> Coordinated field delivery</span>
                <span><CheckCircle2 size={16} /> Documented closeout</span>
              </div>
            </div>
            <HeroGraphic />
          </div>
        </section>

        <section className="company-intro">
          <div className="company-container company-intro-inner">
            <div className="company-section-label"><span>01</span> CONNECTED BY DESIGN</div>
            <h2>One partner across the work that keeps your sites online.</h2>
            <p>From cabling and wireless to network infrastructure, security, and managed services, Tekstein connects planning and field execution so each part of the project supports the next.</p>
            <a className="company-text-link" href="#delivery">See how projects move <ArrowDown size={15} /></a>
          </div>
        </section>

        <section className="company-solutions" id="solutions">
          <div className="company-container">
            <div className="company-section-heading">
              <div><div className="company-section-label"><span>02</span> WHAT WE DO</div><h2>Plan it. Build it. Keep it working.</h2></div>
              <p>Technical services organized around the full life of your infrastructure—not isolated installs.</p>
            </div>
            <div className="company-solution-grid">
              {solutionGroups.map((group) => {
                const Icon = group.icon;
                return (
                  <article className="company-solution-card" key={group.number}>
                    <div className="company-card-top"><span>{group.number} / {group.eyebrow}</span><Icon aria-hidden="true" size={22} /></div>
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                    <ul>{group.services.map((service) => <li key={service}><CheckCircle2 size={15} />{service}</li>)}</ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="company-feature">
          <div className="company-container company-feature-grid">
            <div className="company-feature-visual" aria-hidden="true">
              <div className="company-radar">
                <div className="company-radar-ring company-radar-ring--one" />
                <div className="company-radar-ring company-radar-ring--two" />
                <div className="company-radar-ring company-radar-ring--three" />
                <div className="company-radar-sweep" />
                <span className="company-radar-point company-radar-point--a" />
                <span className="company-radar-point company-radar-point--b" />
                <span className="company-radar-point company-radar-point--c" />
                <div className="company-radar-center"><Wifi size={27} /></div>
              </div>
              <div className="company-feature-tag"><Activity size={15} /> RF / COVERAGE / CAPACITY</div>
            </div>
            <div className="company-feature-copy">
              <div className="company-section-label"><span>03</span> FEATURED CAPABILITY</div>
              <h2>Wireless designed around the real site.</h2>
              <p>Plan and validate Wi-Fi coverage for the spaces, users, and devices that depend on it. Start with the site conditions, then make the design and deployment choices with better information.</p>
              <div className="company-feature-points">
                <span><CheckCircle2 size={16} /> Predictive planning</span>
                <span><CheckCircle2 size={16} /> On-site survey and validation</span>
                <span><CheckCircle2 size={16} /> Coverage and capacity review</span>
                <span><CheckCircle2 size={16} /> Clear findings and next steps</span>
              </div>
              <a className="company-button company-button--dark" href="#contact">Plan a wireless project <ArrowRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="company-industries" id="industries">
          <div className="company-container company-industries-grid">
            <div className="company-industries-intro">
              <div className="company-section-label"><span>04</span> INDUSTRIES</div>
              <h2>Technology built around how your sites operate.</h2>
              <p>Different environments carry different demands. Project scope starts with the people, systems, and conditions at each location.</p>
              <a className="company-text-link" href="#contact">Talk through your environment <ArrowRight size={15} /></a>
            </div>
            <div className="company-industries-list">
              {industries.map((industry) => <div key={industry}><Building2 size={16} />{industry}<ArrowUpRight size={14} /></div>)}
            </div>
          </div>
        </section>

        <section className="company-field" id="field-team">
          <div className="company-container company-field-grid">
            <div className="company-field-copy">
              <div className="company-section-label"><span>05</span> FIELD OPERATIONS</div>
              <h2>Turn the plan into work that is visible and verifiable.</h2>
              <p>Assignments, site details, crew coordination, time tracking, and closeout all matter after the design is complete. Tekstein Workforce keeps field teams and administrators working from one organized view.</p>
              <a className="company-button company-button--primary" href="/workforce/">Explore Tekstein Workforce <ArrowRight size={16} /></a>
            </div>
            <div className="company-field-board">
              <div className="company-board-head"><span>FIELD DELIVERY</span><span className="company-board-live"><i /> ORGANIZED</span></div>
              <div className="company-board-route"><span className="company-route-step"><Network size={19} /></span><span className="company-route-line" /><span className="company-route-step"><Users size={19} /></span><span className="company-route-line" /><span className="company-route-step"><CheckCircle2 size={19} /></span></div>
              <div className="company-board-labels"><span>Scope</span><span>Crew</span><span>Closeout</span></div>
              <div className="company-board-card"><div className="company-board-badge">JOB FLOW</div><strong>From assignment to verification</strong><span>Keep each step in view.</span></div>
            </div>
          </div>
        </section>

        <section className="company-lifecycle" id="delivery">
          <div className="company-container">
            <div className="company-section-heading">
              <div><div className="company-section-label"><span>06</span> DELIVERY LIFECYCLE</div><h2>A clear path from question to operation.</h2></div>
              <p>Each phase informs the next, so the work stays coordinated from early planning through ongoing improvement.</p>
            </div>
            <div className="company-lifecycle-grid">
              {lifecycle.map(([number, title, description]) => (
                <article className="company-lifecycle-step" key={number}>
                  <span className="company-step-number">{number}</span>
                  <h3>{title}</h3><p>{description}</p>
                </article>
              ))}
            </div>
            <div className="company-principles"><span><CheckCircle2 size={16} /> Requirements-led</span><span><CheckCircle2 size={16} /> Quality-checked</span><span><CheckCircle2 size={16} /> Documented</span></div>
          </div>
        </section>

        <section className="company-contact" id="contact">
          <div className="company-container company-contact-inner">
            <div>
              <div className="company-section-label"><span>07</span> START A CONVERSATION</div>
              <h2>Let’s scope the next step together.</h2>
              <p>Share the site, the challenge, and the outcome you need. Tekstein can help shape the work from there.</p>
            </div>
            <div className="company-contact-actions">
              <a className="company-button company-button--light" href="mailto:teksteinllc@gmail.com?subject=Project%20inquiry%20for%20Tekstein">Email Tekstein <ArrowRight size={16} /></a>
              <a className="company-contact-workforce" href="/workforce/">Workforce sign in <ArrowUpRight size={14} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="company-footer">
        <div className="company-container company-footer-main">
          <div><Brand /><p>Network infrastructure and field delivery for connected organizations.</p></div>
          <div className="company-footer-links"><a href="#solutions">Solutions</a><a href="#industries">Industries</a><a href="#delivery">Delivery lifecycle</a><a href="/workforce/">Workforce</a></div>
          <div className="company-footer-contact"><span>TEKSTEIN LLC</span><span>Network infrastructure · Field operations</span><a href="mailto:teksteinllc@gmail.com">teksteinllc@gmail.com</a></div>
        </div>
        <div className="company-container company-footer-bottom"><span>© {new Date().getFullYear()} Tekstein LLC</span><span>Designed for connected work.</span></div>
      </footer>
    </div>
  );
}
