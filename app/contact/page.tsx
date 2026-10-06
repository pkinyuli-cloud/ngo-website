import Link from 'next/link';

export default function ContactPage() {
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
            <p className="eyebrow">Contact us</p>
            <h1>Let’s create opportunity together.</h1>
            <p className="subheading">
              We would love to hear from you whether you are interested in volunteering, partnering,
              donating, or learning more about our work.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container split-layout">
            <div className="split-content">
              <div className="card">
                <h3>Get in touch</h3>
                <ul className="features-list">
                  <li>Email: info@auroraofhope.org</li>
                  <li>Phone: +254 700 000 000</li>
                  <li>Address: Unafri House, 2nd Floor, Rm 204, P.O Box 29050 - 00100, Nairobi, Kenya</li>
                </ul>
              </div>
            </div>

            <div className="split-content">
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="you@example.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" placeholder="How would you like to support or partner with us?" />
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
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
