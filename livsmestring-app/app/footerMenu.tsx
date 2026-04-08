import Link from "next/link";

export default function FooterMenu() {
  return (
    <nav className="mobile-footer-menu">
      <Link href="/category" className="mobile-footer-link">
        <img
          src="https://punkt-cdn.oslo.kommune.no/16/icons/home.svg"
          alt="Hjem"
          className="mobile-footer-icon"
        />
      </Link>
      <Link href="/category/helse" className="mobile-footer-link">
        <img
          src="https://punkt-cdn.oslo.kommune.no/16/icons/ecg-heart.svg"
          alt="Helse"
          className="mobile-footer-icon"
        />
      </Link>
      <Link href="/category/karriere" className="mobile-footer-link">
        <img
          src="https://punkt-cdn.oslo.kommune.no/16/icons/briefcase.svg"
          alt="Karriere"
          className="mobile-footer-icon"
        />
      </Link>
      <Link href="/language" className="mobile-footer-link">
        <img
          src="https://punkt-cdn.oslo.kommune.no/16/icons/language.svg"
          alt="Språk"
          className="mobile-footer-icon"
        />
      </Link>
    </nav>
  );
}