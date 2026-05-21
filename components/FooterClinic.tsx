import Link from 'next/link'

export default function FooterClinic() {
  return (
    <footer className="f-footer">
      <div className="f-footer-top">
        <div className="f-footer-brand">
          <div className="f-footer-logo">
            <img src="/logo_full_black.svg" alt="Ninto" style={{ height: 24, width: 'auto' }} />
          </div>
          <p className="f-footer-desc">Meeting every regulation so you can focus exclusively on your patients. We handle the compliance, you provide the care.</p>
        </div>
        <div className="f-footer-cols">
          <div className="f-footer-col">
            <span className="f-footer-col-head">Product</span>
            <Link href="/clinic">Home</Link>
            <Link href="/clinic#about">About</Link>
            <Link href="/clinic#benefits">Features</Link>
            <Link href="/clinic#clinics">Ninto Users</Link>
          </div>
          <div className="f-footer-col">
            <span className="f-footer-col-head">Resources</span>
            <Link href="/clinic#faq">FAQ</Link>
            <Link href="/clinic/blogs">Blogs</Link>
            <Link href="/clinic#testimonials">Testimonials</Link>
            <Link href="/clinic/contact">Contact us</Link>
          </div>
          <div className="f-footer-col">
            <span className="f-footer-col-head">Legals</span>
            <Link href="/clinic/terms">Terms &amp; conditions</Link>
            <Link href="/clinic/privacy">Privacy policies</Link>
            <a href="#">Licenses</a>
          </div>
        </div>
      </div>
      <div className="f-footer-bottom">
        <p className="f-footer-copy">© 2026 Ninto. Byepo Technologies Pvt. Ltd.</p>
        <div className="f-socials">
          <span className="f-social-btn"><i className="ti ti-brand-linkedin"></i></span>
          <span className="f-social-btn"><i className="ti ti-brand-x"></i></span>
          <span className="f-social-btn"><i className="ti ti-brand-instagram"></i></span>
          <span className="f-social-btn"><i className="ti ti-brand-facebook"></i></span>
        </div>
      </div>
    </footer>
  )
}
