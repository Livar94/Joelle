import { contact, socialLinks } from '@/data/content';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-sky-500 px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-yellow-300/30 blur-3xl" />
      <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-slate-950/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-10 text-center md:grid-cols-3">
        <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-xl ring-1 ring-white/20">
          <h2 className="mb-4 text-2xl font-black">GET IN TOUCH</h2>
          <a className="block text-white/90 transition hover:text-white" href={`tel:${contact.phone}`}>
            Phone: 0096181946089
          </a>
          <a className="mt-2 block text-white/90 transition hover:text-white" href={`mailto:${contact.email}`}>
            E-mail: info@joelleacademy.net
          </a>
        </div>

        <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-xl ring-1 ring-white/20">
          <h2 className="mb-4 text-2xl font-black">Business hours</h2>
          <p className="text-white/90">Monday – Friday: 10am – 7pm</p>
        </div>

        <div className="flex items-center justify-center gap-4 rounded-3xl bg-white/10 p-6 backdrop-blur-xl ring-1 ring-white/20">
          <a className="grid h-14 w-14 place-items-center rounded-full bg-pink-600 text-sm font-black text-white shadow-lg transition hover:-translate-y-1" href={socialLinks.instagram} target="_blank" rel="noreferrer">
            IG
          </a>
          <a className="grid h-14 w-14 place-items-center rounded-full bg-white text-sm font-black text-sky-700 shadow-lg transition hover:-translate-y-1" href={socialLinks.linkedin} target="_blank" rel="noreferrer">
            in
          </a>
          <a className="grid h-14 w-14 place-items-center rounded-full bg-slate-950 text-xs font-black text-white shadow-lg transition hover:-translate-y-1" href={socialLinks.tiktok} target="_blank" rel="noreferrer">
            TikTok
          </a>
        </div>
      </div>
    </footer>
  );
}
