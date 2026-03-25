'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import FooterMenu from "../../footerMenu";


export default function Page() {
  const params = useParams();
  const category = params.category as 'helse' | 'karriere';

  const undertemaer = {
    helse: ["Skeiv verden", "Vold i nære relasjoner", "Mat og helse", "Psykisk helse", "Fysisk helse", "Munnhelse", "Kvinnens reproduktive helse"],
    karriere: ["Meg i kontekst", "Muligheter og begrensninger", "Valg og tilfeldigheter", "Tilpasning og motstand", "Endring og stabilitet"],
  };

  return (
    <><main className="pkt-container">
      <div className="category-grid">
        {undertemaer[category].map((undertema) => (
          <Link
            href={`/category/${category}/${undertema}`}
            key={undertema}
            className="pkt-linkcard"
          >
            <div className="pkt-linkcard__title">{undertema}</div>
          </Link>
        ))}
      </div>
    </main><FooterMenu /></>
);
}
