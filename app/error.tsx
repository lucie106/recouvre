"use client";

import Link from "next/link";

export default function Erreur({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="mx-auto max-w-3xl px-5 pt-16">
      <h1 className="font-titre text-3xl font-bold">Un incident est survenu.</h1>
      <p className="mt-3 text-sourdine">
        Ce n'est pas de votre faute. Vous pouvez réessayer ou revenir à l'accueil.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          onClick={reset}
          className="rounded-md bg-sapin px-6 py-4 font-semibold text-papier hover:bg-sapin-fonce"
        >
          Réessayer
        </button>
        <Link href="/" className="rounded-md border border-trait px-6 py-4 text-center font-semibold">
          Retour à l'accueil
        </Link>
      </div>
    </main>
  );
}
