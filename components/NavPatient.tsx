import Link from 'next/link'

export default function NavPatient() {
  return (
    <>
      <header className="fnav">
        <Link href="/" className="fnav-logo">
          <img src="/Patient/patient%20logo.png" alt="Ninto" style={{ height: 24, width: 'auto' }} />
        </Link>
        <nav>
          <ul className="fnav-links">
            <li><Link href="/#about">About</Link></li>
            <li><Link href="/#benefits">Key Benefits</Link></li>
            <li><Link href="/#users">Ninto users</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
            <li><Link href="/contact">Contact us</Link></li>
          </ul>
        </nav>
        <Link href="/contact" className="fnav-btn">Get started</Link>
        <button className="fnav-hamburger" aria-label="Menu">
          <span></span>
          <span></span>
        </button>
      </header>

      <div className="mobile-menu">
        <div className="mobile-menu-header">
          <Link href="/" className="fnav-logo">
            <img src="/Patient/patient%20logo.png" alt="Ninto" style={{ height: 24, width: 'auto' }} />
          </Link>
          <button className="mobile-menu-close" aria-label="Close">
            <span></span><span></span>
          </button>
        </div>
        <nav className="mobile-menu-nav">
          <ul>
            <li><Link href="/#about">About</Link></li>
            <li><Link href="/#benefits">Key Benefits</Link></li>
            <li><Link href="/#users">Ninto users</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
            <li><Link href="/contact">Contact us</Link></li>
          </ul>
        </nav>
      </div>
    </>
  )
}
