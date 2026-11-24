import Link from "next/link";

export const metadata = { title: "Débloquer la suite — Recouvre" };

export default function Offre() {
  return (
    <main className="mx-auto max-w-3xl px-5 pt-16">
      <h1 className="font-titre text-3xl font-bold">L'offre arrive bientôt.</h1>
      <p className="mt-4 text-sourdine">
        Cette page affichera les formules et le paiement à la prochaine étape.
      </p>
      <Link href="/" className="mt-8 inline-block py-2 underline underline-offset-4">
        Retour à l'accueil
      </Link>
    </main>
  );
}
