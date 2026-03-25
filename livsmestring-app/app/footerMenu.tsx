import Link from "next/link";

// need to fix or delete later.

export default function FooterMenu() {
  return (
    <footer className="pkt-footer-simple" >
      <div className="pkt-footer-simple__container">
        <ul className="pkt-footer-simple__list">
          <li className="pkt-footer-simple__list-item">
            <Link href="/category" className="pkt-footer-simple__link">
              <img
                src="https://punkt-cdn.oslo.kommune.no/16/icons/home.svg"
                alt="Hjem"
                className="pkt-footer-simple__link-icon pkt-icon"
              />
            </Link>
          </li>
          <li className="pkt-footer-simple__list-item">
            <Link href="/category/helse" className="pkt-footer-simple__link">
              <img
                src="https://punkt-cdn.oslo.kommune.no/16/icons/ecg-heart.svg"
                alt="Helse"
                className="pkt-footer-simple__link-icon pkt-icon"
              />
            </Link>
          </li>
          <li className="pkt-footer-simple__list-item">
            <Link href="/category/karriere" className="pkt-footer-simple__link">
              <img
                src="https://punkt-cdn.oslo.kommune.no/16/icons/briefcase.svg"
                alt="Karriere"
                className="pkt-footer-simple__link-icon pkt-icon"
              />
            </Link>
          </li>
          <li className="pkt-footer-simple__list-item">
            <Link href="/innstillinger" className="pkt-footer-simple__link">
              <img
                src="https://punkt-cdn.oslo.kommune.no/16/icons/cogwheel.svg"
                alt="Instillinger"
                className="pkt-footer-simple__link-icon pkt-icon"
              />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}