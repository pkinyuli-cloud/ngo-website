import Link from 'next/link';

const programs = [
  {
    title: 'Career Counselling',
    description: 'Self-awareness, career education, goal setting, and access to pathways that help youth make informed decisions.',
  },
  {
    title: 'STEM Mentorship',
    description: 'Targeted mentoring sessions, career talks, and exposure activities that build interest in STEM fields and confidence.',
  },
  {
    title: 'Tech Mtaani Initiative',
    description: 'A practical hands-on learning model that introduces youth to digital skills, devices, and technology-based learning.',
  },
];

export default function ProgramsPage() {
  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <Link href="/" className="logo" aria-label="Aurora of Hope Kenya home">
            <span className="logo-mark">A</span>
            <span className="logo-text">AURORA OF HOPE</span>
            <span className="logo-tagline">Kenya</span>
          </Link>

          <nav className="main-nav" aria-label="Main navigation">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/programs">Programs</Link>
            <Link href="/impact">Impact</Link>
            <Link href="/volunteer">Volunteer</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <div className="nav-actions">
            <Link href="/contact" className="btn btn-ghost">Partner</Link>
            <Link href="/volunteer" className="btn btn-primary">Donate</Link>
          </div>
        </div>
      </header>

      <main>
        <section className="page-header">
          <div className="container narrow">
            <p className="eyebrow">Programs</p>
            <h1>Practical support for brighter futures.</h1>
            <p className="subheading">
              Our programs are designed to build confidence, expose youth to opportunity, and help them
              translate potential into action.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container grid grid-3">
            {programs.map((program) => (
              <article key={program.title} className="card">
                <div className="card-icon">✦</div>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-section">
            <h3>Aurora of Hope</h3>
            <p>Empowering youth with guidance, mentorship, and stronger futures.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/programs">Programs</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <ul>
              <li>info@auroraofhope.org</li>
              <li>+254 700 000 000</li>
            </ul>
          </div>
        </div>
        <div className="container footer-bottom">© 2025 Aurora of Hope Kenya</div>
      </footer>
    </>
  );
}
