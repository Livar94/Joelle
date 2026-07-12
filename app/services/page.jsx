import PageHero from '@/components/PageHero';
import { services } from '@/data/content';

export const metadata = {
  title: 'الخدمات | Joelle Academy',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero title="الخدمات" />

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 to-white" />

        <div className="container-shell grid items-stretch gap-8 lg:grid-cols-3" dir="rtl">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group glass-card flex h-full flex-col overflow-hidden rounded-[2rem] transition duration-300 hover:-translate-y-2 hover:shadow-glow"
            >
              <div className="relative grid min-h-56 place-items-center overflow-hidden bg-white p-8">
                <div className="absolute inset-0 bg-radial-soft opacity-80" />

                <span className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-slate-950 text-sm font-black text-white">
                  0{index + 1}
                </span>

                <img
                  src={service.image}
                  alt=""
                  className="relative h-44 w-52 object-contain transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="flex flex-1 flex-col p-8 text-right">
                <h2 className="text-2xl font-black leading-tight text-slate-950">
                  {service.title}
                </h2>

                <div className="mt-6 space-y-3 text-base leading-8 text-slate-600">
                  {service.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}