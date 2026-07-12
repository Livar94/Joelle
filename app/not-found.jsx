import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="grid min-h-[60vh] place-items-center bg-white px-4 py-20 text-center">
      <div>
        <h1 className="text-5xl font-black text-slate-950">NotFound</h1>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-slate-950 px-8 py-4 text-sm font-black text-white shadow-glow">
          Home
        </Link>
      </div>
    </section>
  );
}
