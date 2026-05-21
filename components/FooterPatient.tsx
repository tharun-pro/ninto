import Link from 'next/link'
import Image from 'next/image'

export default function FooterPatient() {
  return (
    <footer className="f-footer">
      <div className="f-footer-top">
        <div className="f-footer-brand">
          <div className="f-footer-logo">
            <Image src="/ninto-logo.png" alt="Ninto" width={80} height={24} style={{ height: 24, width: 'auto' }} />
          </div>
          <p className="f-footer-desc">Store, organize and share your family&apos;s medical history. ABHA-linked records, prescription tracking, and effortless sharing with doctors.</p>
        </div>
        <div className="f-footer-cols">
          <div className="f-footer-col">
            <span className="f-footer-col-head">Product</span>
            <Link href="/">Home</Link>
            <Link href="/#about">About</Link>
            <Link href="/#benefits">Features</Link>
            <Link href="/#users">Ninto Users</Link>
          </div>
          <div className="f-footer-col">
            <span className="f-footer-col-head">Resources</span>
            <Link href="/#faq">FAQ</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/#testimonials">Testimonials</Link>
            <Link href="/contact">Contact us</Link>
          </div>
          <div className="f-footer-col">
            <span className="f-footer-col-head">Legals</span>
            <Link href="/terms">Terms &amp; conditions</Link>
            <Link href="/privacy">Privacy policies</Link>
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
