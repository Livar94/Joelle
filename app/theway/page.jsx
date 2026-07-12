import PageHero from '@/components/PageHero';
import { waySteps } from '@/data/content';

export const metadata = {
  title: 'الطريقة | Joelle Academy',
};

export default function TheWayPage() {
  return (
    <>
      <PageHero title="الطريقة" />
      <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8">
        <img src="/assets/images/75-755867_vector-dots-pop-art-pop-art-pattern-png.png" alt="" className="absolute -left-32 top-10 h-[34rem] w-[34rem] opacity-[0.04]" />
        <div className="container-shell">
          <div className="grid gap-6 lg:grid-cols-5" dir="rtl">
            {waySteps.map((step) => (
              <article key={step.number} className="group relative overflow-hidden rounded-[2rem] bg-slate-50 p-5 text-center shadow-soft ring-1 ring-slate-200 transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-glow">
                <div className="absolute inset-x-8 top-0 h-1 rounded-b-full bg-gradient-to-r from-sky-500 to-yellow-300" />
                <img src={step.image} alt="" className="mx-auto h-36 w-44 object-contain transition duration-500 group-hover:scale-110" />
                <h5 className="mt-4 text-2xl font-black text-sky-600">{step.number}</h5>
                <h3 className="mt-4 text-lg font-bold leading-8 text-slate-800">{step.text}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
