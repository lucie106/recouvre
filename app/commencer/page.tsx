import Link from "next/link";

export const metadata = { title: "Commencer — Recouvre" };

export default function Commencer() {
  return (
    <main className="mx-auto max-w-3xl px-5 pt-16">
      <h1 className="font-titre font-bold text-3xl">Le questionnaire arrive bientôt.</h1>
      <p className="mt-4 text-sourdine">
        Trois questions rapides vous permettront de chiffrer ce que vos impayés vous coûtent.
        Cette page sera prête à la prochaine étape.
      </p>
      <Link href="/" className="mt-8 inline-block underline underline-offset-4 py-2">
        Retour à l'accueil
      </Link>
    </main>
  );
}
