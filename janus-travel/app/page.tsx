export default function Home() {
  return (
    <main>
      <section
        className="
          relative
          flex
          min-h-screen
          items-center
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: "url('/images/beach-resort.jpeg')",
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-ink/35" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs uppercase tracking-[.3em] text-white/80">
              Chicago travel advisors · Est. 1979
            </p>

            <h1 className="font-serif text-5xl leading-[1.05] text-white md:text-7xl">
              Thoughtful journeys.
              <br />
              Personal service.
              <br />
              <em className="text-gold">Always.</em>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/85">
              Personal travel planning backed by decades of experience,
              trusted relationships, and attentive service.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/plan-your-trip"
                className="bg-wine px-6 py-3 text-sm font-medium text-white transition hover:bg-wine/90"
              >
                Plan your trip
              </a>

              <a
                href="/why-janus"
                className="border border-white/50 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Why Janus
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
