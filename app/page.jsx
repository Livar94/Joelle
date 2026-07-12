import Link from 'next/link';
import { hero, navLinks, prices } from '@/data/content';

export default function HomePage() {
  const pageLinks = navLinks.filter((link) => link.href !== '/');

  return (
    <>
      <section className="relative isolate overflow-visible bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[url('/assets/images/white-elegant-texture-background_23-2148445781.webp')] bg-cover bg-center opacity-80" />
        <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-sky-100/90 to-transparent" />

        <div className="container-shell grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
          <div className="order-2 text-center lg:order-1 lg:text-right" dir="rtl">
            <div className="inline-flex rounded-full bg-white/80 px-4 py-2 text-sm font-bold text-sky-700 shadow-soft ring-1 ring-sky-100">
              {hero.subtitle}
            </div>

            <h1 className="mt-6 text-5xl font-black leading-tight tracking-tight text-slate-950 drop-shadow-sm sm:text-7xl">
              {hero.title}
            </h1>

            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-end">
              <Link
                href="/prices"
                className="rounded-full bg-white px-8 py-4 text-sm font-black text-slate-950 shadow-soft ring-1 ring-slate-200 transition hover:-translate-y-1"
              >
                الأسعار
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-3xl">
              <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-yellow-300/50 blur-3xl" />
              <div className="absolute -right-8 bottom-8 h-48 w-48 rounded-full bg-sky-300/50 blur-3xl" />

              <img
                src="/assets/images/MicrosoftTeams-image.png"
                alt=""
                className="relative z-10 w-full animate-float object-contain drop-shadow-2xl"
              />

              <img
                src="/assets/images/joelle.png"
                alt=""
                className="absolute bottom-0 -right-10 z-20 w-28 object-contain drop-shadow-2xl sm:-right-16 sm:w-40 lg:-right-28 lg:w-52 xl:-right-36"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="container-shell">
          <div className="mb-10 text-center" dir="rtl">
            <h2 className="text-4xl font-black text-slate-950">
              Joelle Academy
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pageLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group glass-card rounded-[2rem] p-7 text-right transition duration-300 hover:-translate-y-2 hover:shadow-glow"
                dir="rtl"
              >
                <div className="mb-8 h-1.5 w-20 rounded-full bg-gradient-to-r from-yellow-300 to-sky-500" />

                <h3 className="text-2xl font-black text-slate-950">
                  {link.label}
                </h3>

                <span className="mt-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-white transition group-hover:translate-x-[-6px]">
                  ←
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="container-shell grid gap-6 md:grid-cols-3" dir="rtl">
          {prices.slice(0, 3).map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] bg-white/10 p-6 text-center ring-1 ring-white/15 backdrop-blur-xl"
            >
              <h3 className="text-xl font-black">{item.title}</h3>
              <p className="mt-4 text-3xl font-black text-yellow-300">
                {item.price}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}