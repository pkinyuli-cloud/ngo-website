import Link from 'next/link';

export default function AboutPage() {
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
            <p className="eyebrow">About us</p>
            <h1>We believe every young person deserves a chance to thrive.</h1>
            <p className="subheading">
              Aurora of Hope Kenya exists to provide guidance, mentorship, and practical support to
              youth across communities so they can discover and pursue meaningful futures.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container split-layout">
            <div className="split-content">
              <h2>Our vision</h2>
              <p>
                An organization that believes in creating a world where every learner, regardless of
                their background, has equitable access to quality education and opportunity.
              </p>
              <h2>Our mission</h2>
              <p>
                We are committed to providing relevant support to young individuals by helping them
                explore career paths, fostering STEM interest, and equipping them with essential skills.
              </p>
            </div>

            <div className="split-content">
              <div className="card">
                <h3>What guides us</h3>
                <ul className="features-list">
                  <li>Compassion and respect for every learner</li>
                  <li>Community-led action and engagement</li>
                  <li>Practical pathways to opportunity</li>
                  <li>Transparent partnerships and growth</li>
                </ul>
              </div>
            </div>
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
