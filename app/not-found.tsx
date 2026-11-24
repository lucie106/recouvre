import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-5 pt-16">
      <p className="font-titre text-5xl font-bold text-brique">404</p>
      <h1 className="mt-4 font-titre text-3xl font-bold">Cette page n'existe pas.</h1>
      <p className="mt-3 text-sourdine">
        Le lien est peut-être ancien ou mal recopié.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-md bg-sapin px-6 py-4 font-semibold text-papier hover:bg-sapin-fonce"
      >
        Retour à l'accueil
      </Link>
    </main>
  );
}
