'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { contact, navLinks } from '@/data/content';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-white/80 shadow-sm shadow-slate-200/40 backdrop-blur-2xl">
      <div className="bg-slate-950 px-4 py-2 text-center text-xs text-white sm:text-sm">
        <span>
          <a className="font-semibold text-white underline-offset-4 hover:underline" href={`tel:${contact.phone}`}>
            Phone: 0096181946089
          </a>
          <span className="mx-3 text-white/50">|</span>
          <span>Business hours: &nbsp;&nbsp;•&nbsp;&nbsp; Monday – Friday: 10am – 7pm</span>
        </span>
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="relative flex h-14 w-32 items-center overflow-hidden rounded-2xl bg-white p-2 shadow-soft ring-1 ring-slate-200/70 transition duration-300 group-hover:-translate-y-0.5">
            <img src="/assets/images/logojo.png" alt="Joelle Academy" className="h-full w-full object-contain" />
          </span>
        </Link>

        <button
          type="button"
          aria-label="Open navigation"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-2xl text-white shadow-glow transition hover:-translate-y-0.5 lg:hidden"
        >
          {open ? '×' : '☰'}
        </button>

        <div className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? 'bg-slate-950 text-white shadow-glow'
                    : 'text-slate-700 hover:bg-sky-50 hover:text-sky-700'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {open ? (
        <div className="border-t border-slate-100 bg-white/95 px-4 py-4 shadow-soft backdrop-blur-xl lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-2xl px-4 py-3 text-base font-semibold transition ${
                  pathname === link.href ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-700 hover:bg-sky-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
