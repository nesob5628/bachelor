import Link from "next/link";
import Image from "next/image";

export default function FooterMenu() {
  // Bottom navigation displayed on mobile devices.
  return (
    <nav className="mobile-footer-menu">
      <Link href="/category" className="mobile-footer-link">
        <div className="mobile-footer-icon">
          <Image
            src="https://punkt-cdn.oslo.kommune.no/16/icons/home.svg"
            alt="Hjem"
            fill
          />
        </div>
      </Link>
      <Link href="/category/helse" className="mobile-footer-link">
        <div className="mobile-footer-icon">
          <Image
            src="https://punkt-cdn.oslo.kommune.no/16/icons/ecg-heart.svg"
            alt="Helse"
            fill
          />
        </div>
      </Link>
      <Link href="/category/karriere" className="mobile-footer-link">
        <div className="mobile-footer-icon">
          <Image
            src="https://punkt-cdn.oslo.kommune.no/16/icons/briefcase.svg"
            alt="Karriere"
            fill
          />
        </div>
      </Link>
      <Link href="/language?change=true" className="mobile-footer-link">
        <div className="mobile-footer-icon">
          <Image
            src="https://punkt-cdn.oslo.kommune.no/16/icons/language.svg"
            alt="Språk"
            fill
          />
        </div>
      </Link>
    </nav>
  );
}
