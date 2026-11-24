export const metadata = { title: "Mentions légales — Recouvre" };

function A({ children }: { children: React.ReactNode }) {
  return (
    <mark className="bg-yellow-200 px-1 text-encre">[À COMPLÉTER : {children}]</mark>
  );
}

export default function MentionsLegales() {
  return (
    <main className="mx-auto max-w-3xl px-5 pt-12 [&_h2]:font-titre [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-8 [&_p]:mt-2">
      <h1 className="font-titre font-bold text-3xl">Mentions légales</h1>

      <h2>Éditeur du site</h2>
      <p>
        Recouvre est édité par <A>nom et prénom de l'entrepreneur</A>, entrepreneur
        individuel (micro-entreprise).
      </p>
      <p>SIRET : <A>numéro SIRET, reçu après l'immatriculation</A></p>
      <p>Adresse : <A>adresse professionnelle</A></p>
      <p>E-mail : <A>adresse e-mail de contact</A></p>
      <p>Directeur de la publication : <A>nom et prénom</A></p>
      <p>
        TVA : <A>« TVA non applicable, art. 293 B du CGI » si franchise en base, sinon numéro de TVA</A>
      </p>

      <h2>Hébergeur</h2>
      <p>
        Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
        Site : vercel.com.
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        Les textes, la marque et l'interface de Recouvre sont protégés. Toute reproduction
        sans autorisation écrite est interdite.
      </p>

      <h2>Données personnelles</h2>
      <p>
        La politique de confidentialité sera publiée avant l'ouverture des paiements.
      </p>
    </main>
  );
}
