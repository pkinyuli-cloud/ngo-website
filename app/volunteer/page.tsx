import Link from 'next/link';

export default function VolunteerPage() {
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
            <p className="eyebrow">Get involved</p>
            <h1>Join the movement and help youth have a go.</h1>
            <p className="subheading">
              Volunteer your time, your skills, or your resources to help young people access
              opportunity and believe in their future.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container grid grid-3">
            <article className="card">
              <div className="card-icon">💛</div>
              <h3>Donate</h3>
              <p>Support youth programs, mentorship sessions, learning materials, and opportunities.</p>
            </article>
            <article className="card">
              <div className="card-icon">🤝</div>
              <h3>Volunteer</h3>
              <p>Share your time, skills, and guidance with learners and young people in the community.</p>
            </article>
            <article className="card">
              <div className="card-icon">📣</div>
              <h3>Advocate</h3>
              <p>Help amplify the mission, link us to partners, and build visibility around youth needs.</p>
            </article>
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
