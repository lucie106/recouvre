"use client";

import Link from "next/link";
import { useState } from "react";

const PRIX = 29;

type Option = { label: string; valeur: number; phrase: string };
type Question = {
  id: "nombre" | "montant" | "anciennete";
  titre: string;
  aide: string;
  options: Option[];
};

const QUESTIONS: Question[] = [
  {
    id: "nombre",
    titre: "Combien de factures sont en retard de paiement en ce moment ?",
    aide: "Comptez toutes celles dont l'échéance est dépassée, même d'un jour.",
    options: [
      { label: "1 facture", valeur: 1, phrase: "1 facture" },
      { label: "2 ou 3 factures", valeur: 3, phrase: "environ 3 factures" },
      { label: "4 à 6 factures", valeur: 5, phrase: "environ 5 factures" },
      { label: "7 factures ou plus", valeur: 8, phrase: "environ 8 factures" },
    ],
  },
  {
    id: "montant",
    titre: "Quel est le montant d'une facture, en moyenne ?",
    aide: "Une estimation suffit.",
    options: [
      { label: "Moins de 500 €", valeur: 300, phrase: "300 €" },
      { label: "De 500 à 1 500 €", valeur: 1000, phrase: "1 000 €" },
      { label: "De 1 500 à 3 000 €", valeur: 2250, phrase: "2 250 €" },
      { label: "Plus de 3 000 €", valeur: 4000, phrase: "4 000 €" },
    ],
  },
  {
    id: "anciennete",
    titre: "Depuis combien de temps la plus ancienne attend-elle ?",
    aide: "Plus le temps passe, plus il devient gênant de réclamer.",
    options: [
      { label: "Moins d'un mois", valeur: 1, phrase: "moins d'un mois" },
      { label: "Entre 1 et 3 mois", valeur: 2, phrase: "entre 1 et 3 mois" },
      { label: "Plus de 3 mois", valeur: 3, phrase: "plus de 3 mois" },
    ],
  },
];

const euro = (n: number) =>
  new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(n);

type Reponses = Partial<Record<Question["id"], Option>>;

function Cadenas() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

export default function Tunnel() {
  const [etape, setEtape] = useState(0);
  const [reponses, setReponses] = useState<Reponses>({});
  const [client, setClient] = useState("");
  const [facture, setFacture] = useState("");
  const [montant, setMontant] = useState("");
  const [echeance, setEcheance] = useState("");
  const [copie, setCopie] = useState(false);

  const enQuestions = etape < QUESTIONS.length;
  const progression = Math.min(etape, QUESTIONS.length) / QUESTIONS.length;

  function choisir(q: Question, option: Option) {
    setReponses((r) => ({ ...r, [q.id]: option }));
    if (q.id === "montant") setMontant(String(option.valeur));
    setEtape((e) => e + 1);
  }

  const nombre = reponses.nombre?.valeur ?? 0;
  const montantMoyen = reponses.montant?.valeur ?? 0;
  const total = nombre * montantMoyen;
  const moisRembourses = Math.floor(montantMoyen / PRIX);

  const montantNombre = Number(montant.replace(",", "."));
  const montantTexte =
    Number.isFinite(montantNombre) && montantNombre > 0 ? euro(montantNombre) : "[montant]";
  let dateTexte = "";
  if (echeance) {
    const d = new Date(echeance + "T00:00:00");
    if (!Number.isNaN(d.getTime())) {
      dateTexte = d.toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    }
  }
  const numero = facture.trim();
  const nomClient = client.trim();

  const relance =
    `Objet : ${numero ? `Facture ${numero}` : "Votre facture"} — rappel de paiement\n\n` +
    `Bonjour${nomClient ? " " + nomClient : ""},\n\n` +
    `Sauf erreur de ma part, ${numero ? `la facture ${numero}` : "ma facture"} d'un montant de ${montantTexte}` +
    `${dateTexte ? `, arrivée à échéance le ${dateTexte},` : ""} n'a pas encore été réglée.\n\n` +
    `Je vous remercie de bien vouloir procéder au règlement dans les meilleurs délais, ` +
    `ou de me signaler si un élément bloque le paiement.\n\n` +
    `Si votre virement est déjà parti, merci de ne pas tenir compte de ce message.\n\n` +
    `Bien cordialement,\n[Votre nom]`;

  async function copier() {
    try {
      await navigator.clipboard.writeText(relance);
      setCopie(true);
      setTimeout(() => setCopie(false), 2500);
    } catch {
      setCopie(false);
    }
  }

  const bouton =
    "flex w-full items-center justify-center rounded-md bg-sapin px-6 py-4 text-lg font-semibold text-papier hover:bg-sapin-fonce sm:w-auto";
  const champ =
    "mt-1 w-full rounded-md border border-trait bg-white px-4 py-3 text-base text-encre";

  return (
    <main className="mx-auto max-w-3xl px-5 pt-8 pb-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="font-titre text-xl font-bold text-sapin py-1">
          Recouvre
        </Link>
        {enQuestions && (
          <p className="text-sm text-sourdine">Question {etape + 1} sur {QUESTIONS.length}</p>
        )}
      </div>

      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progression * 100)}
        aria-label="Progression"
        className="mt-4 h-2 w-full overflow-hidden rounded-full bg-trait"
      >
        <div
          className="h-full bg-sapin transition-all"
          style={{ width: `${Math.round(progression * 100)}%` }}
        />
      </div>

      {enQuestions && (
        <section className="mt-10">
          <h1 className="font-titre text-3xl font-bold leading-tight">
            {QUESTIONS[etape].titre}
          </h1>
          <p className="mt-3 text-sourdine">{QUESTIONS[etape].aide}</p>
          <ul className="mt-8 flex flex-col gap-3">
            {QUESTIONS[etape].options.map((o) => (
              <li key={o.label}>
                <button
                  onClick={() => choisir(QUESTIONS[etape], o)}
                  className="w-full rounded-md border-2 border-trait bg-white px-5 py-4 text-left text-lg font-medium hover:border-sapin"
                >
                  {o.label}
                </button>
              </li>
            ))}
          </ul>
          {etape > 0 && (
            <button
              onClick={() => setEtape(etape - 1)}
              className="mt-6 py-2 text-sourdine underline underline-offset-4"
            >
              Question précédente
            </button>
          )}
        </section>
      )}

      {etape === QUESTIONS.length && (
        <section className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-brique">
            Votre situation
          </p>
          <h1 className="mt-2 font-titre text-4xl font-bold leading-tight">
            Environ {euro(total)} attendent d'être réclamés.
          </h1>
          <p className="mt-4 text-lg text-sourdine">
            D'après vos réponses : {reponses.nombre?.phrase} d'environ{" "}
            {reponses.montant?.phrase}, la plus ancienne attend depuis{" "}
            {reponses.anciennete?.phrase}. C'est une estimation, pas votre comptabilité.
          </p>

          <div className="mt-8 border-l-4 border-sapin pl-5">
            <h2 className="font-titre text-xl font-semibold">Ce que Recouvre changerait</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Une relance part à 7, 15 et 30 jours, sans que vous ayez à y penser.</li>
              <li>Si rien ne bouge, la lettre de mise en demeure est prête à envoyer.</li>
              {moisRembourses >= 1 && (
                <li>
                  Une seule facture de {reponses.montant?.phrase} récupérée paie{" "}
                  {moisRembourses} mois d'abonnement à {PRIX} €.
                </li>
              )}
            </ul>
          </div>

          <button onClick={() => setEtape(etape + 1)} className={`${bouton} mt-10`}>
            Voir ma première relance
          </button>
        </section>
      )}

      {etape === QUESTIONS.length + 1 && (
        <section className="mt-10">
          <h1 className="font-titre text-3xl font-bold leading-tight">
            Votre première relance, prête à envoyer.
          </h1>
          <p className="mt-3 text-sourdine">
            Remplissez les champs, copiez le message, envoyez-le. C'est à vous.
          </p>

          <div className="mt-6 grid gap-4">
            <label className="block font-medium">
              Nom de votre client
              <input
                className={champ}
                value={client}
                onChange={(e) => setClient(e.target.value)}
                maxLength={80}
                autoComplete="off"
              />
            </label>
            <label className="block font-medium">
              Numéro de facture
              <input
                className={champ}
                value={facture}
                onChange={(e) => setFacture(e.target.value)}
                maxLength={40}
                autoComplete="off"
              />
            </label>
            <label className="block font-medium">
              Montant en euros
              <input
                className={champ}
                value={montant}
                onChange={(e) => setMontant(e.target.value)}
                inputMode="decimal"
                maxLength={12}
                autoComplete="off"
              />
            </label>
            <label className="block font-medium">
              Date d'échéance
              <input
                className={champ}
                type="date"
                value={echeance}
                onChange={(e) => setEcheance(e.target.value)}
              />
            </label>
          </div>

          <div className="mt-8 rounded-md border border-trait bg-white p-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-sapin">
              Relance à 7 jours
            </p>
            <div className="mt-3 whitespace-pre-wrap text-base leading-relaxed">{relance}</div>
          </div>

          <button onClick={copier} className={`${bouton} mt-4`}>
            {copie ? "Message copié" : "Copier le message"}
          </button>

          <h2 className="mt-12 font-titre text-2xl font-semibold">La suite, déjà prête pour vous</h2>
          <ul className="mt-4 divide-y divide-trait border-y border-trait">
            {[
              ["Relance à 15 jours", "Un ton plus ferme, avec un nouveau délai précis."],
              ["Relance à 30 jours", "Le dernier rappel avant la mise en demeure."],
              ["Mise en demeure", "La lettre formelle, prête à envoyer."],
            ].map(([titre, texte]) => (
              <li key={titre} className="flex items-start gap-3 py-4 text-sourdine">
                <Cadenas />
                <div>
                  <p className="font-semibold text-encre">{titre}</p>
                  <p>{texte}</p>
                </div>
              </li>
            ))}
          </ul>

          <Link href="/offre" className={`${bouton} mt-8`}>
            Débloquer la suite
          </Link>
        </section>
      )}
    </main>
  );
}
