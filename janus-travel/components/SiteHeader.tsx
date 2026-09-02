import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-white/5 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-serif text-2xl tracking-[.12em] text-white"
        >
          JANUS{" "}
          <span className="text-gold">TRAVEL</span>
          <span className="ml-3 text-[10px] tracking-[.2em] text-white/60">
            EST. 1979
          </span>
        </Link>

        <nav className="hidden gap-7 text-sm text-white md:flex">
          <Link href="/travel" className="transition hover:text-gold">
            Travel
          </Link>

          <Link href="/why-janus" className="transition hover:text-gold">
            Why Janus
          </Link>

          <Link href="/about" className="transition hover:text-gold">
            About
          </Link>

          <Link href="/contact" className="transition hover:text-gold">
            Contact
          </Link>
        </nav>

        <Link
          href="/plan-your-trip"
          className="border border-white/40 bg-white/10 px-5 py-3 text-sm text-white backdrop-blur-sm transition hover:bg-white/20"
        >
          Plan Your Trip
        </Link>
      </div>
    </header>
  );
}
