import Link from "next/link";

export default function Page() {
  return (
    <main style={{ padding: "2rem" }}>
      <div className="category-grid">
        <Link href="/category/helse" className="pkt-linkcard pkt-linkcard--blue">
          <div className="pkt-linkcard__title">Helse</div>
          <div className="pkt-linkcard__text">
            Velg temaer og videoer innen helse.
          </div>
        </Link>

        <Link href="/category/karriere" className="pkt-linkcard pkt-linkcard--blue">
          <div className="pkt-linkcard__title">Karriere</div>
          <div className="pkt-linkcard__text">
            Velg temaer og videoer innen karriere.
          </div>
        </Link>
      </div>
    </main>
  );
}