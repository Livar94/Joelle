import PageHero from '@/components/PageHero';
import { contact, prices } from '@/data/content';

export const metadata = {
  title: 'الأسعار | Joelle Academy',
};

export default function PricesPage() {
  const whatsappHref = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.message)}`;

  return (
    <>
      <PageHero title="الأسعار" />
      <section className="bg-gradient-to-b from-white to-sky-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="container-shell grid gap-8 sm:grid-cols-2 lg:grid-cols-3" dir="rtl">
          {prices.map((item) => (
            <article key={`${item.title}-${item.price}`} className="group overflow-hidden rounded-[2rem] bg-white shadow-soft ring-1 ring-slate-100 transition duration-300 hover:-translate-y-2 hover:shadow-glow">
              <div className="relative grid min-h-56 place-items-center overflow-hidden bg-slate-50 p-8">
                <div className="absolute inset-0 bg-radial-soft opacity-70" />
                <img src={item.image} alt="" className="relative h-44 w-56 object-contain transition duration-500 group-hover:scale-110" />
              </div>
              <div className="p-7 text-center">
                <h2 className="text-2xl font-black leading-tight text-slate-950">{item.title}</h2>
                {item.secondTitle ? <h2 className="mt-2 text-xl font-black leading-tight text-slate-950">{item.secondTitle}</h2> : null}
                <p className="mt-6 text-4xl font-black text-sky-600">{item.price}</p>
                <div className="mt-7 flex flex-wrap justify-center gap-3">
                  <a href={whatsappHref} target="_blank" rel="noreferrer" className="rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white shadow-glow transition hover:-translate-y-1">
                    Contact us
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
