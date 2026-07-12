export default function PageHero({ title, eyebrow, children, align = 'center' }) {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-radial-soft opacity-80" />
      <img src="/assets/images/75-755867_vector-dots-pop-art-pop-art-pattern-png.png" alt="" className="absolute -left-28 -top-28 -z-10 h-96 w-96 opacity-10" />
      <div className={`mx-auto max-w-5xl ${align === 'right' ? 'text-right' : 'text-center'}`} dir="rtl">
        {eyebrow ? <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-yellow-300">{eyebrow}</p> : null}
        <h1 className="text-4xl font-black leading-tight sm:text-6xl">{title}</h1>
        {children ? <div className="mt-6 text-lg leading-8 text-white/75">{children}</div> : null}
      </div>
    </section>
  );
}
