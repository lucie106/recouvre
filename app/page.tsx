import Link from "next/link";

const benefices = [
  {
    titre: "Trois relances, sans y penser",
    texte:
      "À 7, 15 et 30 jours après l'échéance, un message poli et ferme part à votre place.",
  },
  {
    titre: "La mise en demeure, déjà rédigée",
    texte:
      "Si rien ne bouge, la lettre est prête à envoyer. Vous relisez, vous signez.",
  },
  {
    titre: "Votre argent, en un coup d'œil",
    texte: "Un tableau simple : ce qui est dû, ce qui est relancé, ce qui est encaissé.",
  },
];

export default function Accueil() {
  return (
    <main className="mx-auto max-w-3xl px-5 pt-10 pb-4 sm:pt-16">
      <p className="font-titre text-xl font-bold text-sapin">Recouvre</p>

      <h1 className="font-titre font-bold text-4xl leading-tight mt-8 sm:text-5xl">
        Vos factures impayées méritent une relance. Pas du silence.
      </h1>
      <p className="mt-5 text-lg text-sourdine">
        Recouvre relance vos clients à votre place, puis prépare la mise en demeure.
        Vous ne les réclamez plus : elles reviennent.
      </p>

      <Link
        href="/commencer"
        className="mt-8 flex w-full items-center justify-center rounded-md bg-sapin px-6 py-4 text-lg font-semibold text-papier hover:bg-sapin-fonce sm:inline-flex sm:w-auto"
      >
        Commencer, c'est gratuit
      </Link>

      <section
        aria-labelledby="douleur"
        className="mt-14 border-l-4 border-brique pl-5"
      >
        <h2 id="douleur" className="text-sm font-semibold uppercase tracking-wide text-brique">
          Ce que le silence coûte
        </h2>
        <p className="mt-2 font-titre text-2xl font-semibold leading-snug">
          Trois factures de 1 200 € oubliées, c'est 3 600 € qui dorment chez vos clients.
        </p>
        <p className="mt-2 text-sourdine">
          Exemple chiffré. Plus on attend, plus la facture est difficile à réclamer.
        </p>
      </section>

      <section aria-labelledby="benefices" className="mt-14">
        <h2 id="benefices" className="sr-only">
          Ce que Recouvre fait pour vous
        </h2>
        <ul className="divide-y divide-trait border-y border-trait">
          {benefices.map((b) => (
            <li key={b.titre} className="py-5">
              <h3 className="font-semibold text-lg">{b.titre}</h3>
              <p className="mt-1 text-sourdine">{b.texte}</p>
            </li>
          ))}
        </ul>
      </section>

      <Link
        href="/commencer"
        className="mt-10 flex w-full items-center justify-center rounded-md bg-sapin px-6 py-4 text-lg font-semibold text-papier hover:bg-sapin-fonce sm:inline-flex sm:w-auto"
      >
        Commencer, c'est gratuit
      </Link>
    </main>
  );
}
