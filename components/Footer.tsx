import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-trait mt-16">
      <div className="mx-auto max-w-3xl px-5 py-8 text-sm text-sourdine flex flex-col gap-3 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Recouvre</p>
        <nav aria-label="Informations légales" className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/mentions-legales" className="underline underline-offset-4 py-1">
            Mentions légales
          </Link>
        </nav>
      </div>
    </footer>
  );
}
