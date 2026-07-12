import PageHero from '@/components/PageHero';
import { about } from '@/data/content';

export const metadata = {
  title: 'من نحن؟ | Joelle Academy',
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="من نحن؟" />
      <section className="relative isolate overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <video className="absolute inset-0 -z-20 h-full w-full object-cover" playsInline autoPlay muted loop>
          <source src="/assets/videos/pexels-jack-sparrow-5977260.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 -z-10 bg-slate-950/70" />
        <div className="container-shell">
          <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-white/12 p-8 text-center text-white shadow-glow ring-1 ring-white/25 backdrop-blur-xl sm:p-12" dir="rtl">
            <h2 className="text-4xl font-black">{about.title}</h2>
            <p className="mt-8 text-xl font-bold leading-10">
              {about.textBeforeBreak}
              <br />
              {about.textAfterBreak}
            </p>
            <a href={about.link} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-lg font-black text-sky-600 shadow-soft transition hover:-translate-y-1">
              {about.linkText}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
