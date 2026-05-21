import Link from 'next/link'
import Image from 'next/image'

export default function NavClinic() {
  return (
    <>
      <header className="fnav">
        <Link href="/clinic" className="fnav-logo">
          <Image src="/ninto-clinic-logo.png" alt="Ninto" width={80} height={24} style={{ height: 24, width: 'auto' }} />
        </Link>
        <nav>
          <ul className="fnav-links">
            <li><Link href="/clinic#about">About</Link></li>
            <li><Link href="/clinic#benefits">Key Benefits</Link></li>
            <li><Link href="/clinic#clinics">Ninto Users</Link></li>
            <li><Link href="/clinic/blogs">Blogs</Link></li>
            <li><Link href="/clinic/contact">Contact us</Link></li>
          </ul>
        </nav>
        <Link href="/clinic/contact" className="fnav-btn">Get started</Link>
        <button className="fnav-hamburger" aria-label="Menu">
          <span></span>
          <span></span>
        </button>
      </header>

      <div className="mobile-menu">
        <div className="mobile-menu-header">
          <Link href="/clinic" className="fnav-logo">
            <Image src="/ninto-clinic-logo.png" alt="Ninto" width={80} height={24} style={{ height: 24, width: 'auto' }} />
          </Link>
          <button className="mobile-menu-close" aria-label="Close">
            <span></span><span></span>
          </button>
        </div>
        <nav className="mobile-menu-nav">
          <ul>
            <li><Link href="/clinic#about">About</Link></li>
            <li><Link href="/clinic#benefits">Key Benefits</Link></li>
            <li><Link href="/clinic#clinics">Ninto Users</Link></li>
            <li><Link href="/clinic/blogs">Blogs</Link></li>
            <li><Link href="/clinic/contact">Contact us</Link></li>
          </ul>
        </nav>
      </div>
    </>
  )
}
