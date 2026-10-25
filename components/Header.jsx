"use client";

import { useEffect, useRef, useState } from "react";
import { contact, navLinks } from "@/data/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const headerRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    let frame;

    function updateActiveSection() {
      const offset = header.getBoundingClientRect().height + 32;
      let current = "#home";

      for (const link of navLinks) {
        const section = document.getElementById(link.href.slice(1));
        if (section && section.getBoundingClientRect().top <= offset) {
          current = link.href;
        }
      }

      setActiveSection(current);
    }

    function scheduleUpdate() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActiveSection);
    }

    const observer = new ResizeObserver(() => {
      document.documentElement.style.setProperty(
        "--header-height",
        `${header.getBoundingClientRect().height}px`,
      );
      scheduleUpdate();
    });

    observer.observe(header);
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("hashchange", scheduleUpdate);
    scheduleUpdate();

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
    };
  }, []);

  function closeOnEscape(event) {
    if (event.key === "Escape" && open) {
      setOpen(false);
      menuButtonRef.current?.focus();
    }
  }

  function renderLink(link, mobile = false) {
    const active = activeSection === link.href;

    return (
      <a
        key={link.href}
        href={link.href}
        aria-current={active ? "location" : undefined}
        onClick={() => setOpen(false)}
        className={`${mobile ? "rounded-2xl px-4 py-3 text-base" : "rounded-full px-4 py-2 text-sm"} font-semibold transition ${
          active
            ? "bg-slate-950 text-white shadow-glow"
            : "text-slate-700 hover:bg-sky-50 hover:text-sky-700"
        }`}
      >
        {link.label}
      </a>
    );
  }

  return (
    <header
      ref={headerRef}
      onKeyDown={closeOnEscape}
      className="site-header sticky top-0 z-50 border-b border-white/50 bg-white/90 shadow-sm shadow-slate-200/40 backdrop-blur-2xl"
    >
      <div
        className="bg-slate-950 px-4 py-2 text-center text-xs text-white sm:text-sm"
        dir="ltr"
      >
        <a
          className="font-semibold underline-offset-4 hover:underline"
          href={`tel:${contact.phone}`}
        >
          Phone: {contact.phone}
        </a>
        <span className="mx-3 text-white/50">|</span>
        <span className="inline-block">Business hours: {contact.hours}</span>
      </div>

      <nav
        aria-label="القائمة الرئيسية"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
      >
        <a
          href="#home"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="relative flex h-14 w-32 items-center overflow-hidden rounded-2xl bg-white p-2 shadow-soft ring-1 ring-slate-200/70 transition duration-300 group-hover:-translate-y-0.5">
            <img
              src="/assets/images/logojo.png"
              alt="Joelle Academy — Home"
              className="h-full w-full object-contain"
            />
          </span>
        </a>

        <button
          ref={menuButtonRef}
          type="button"
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-2xl text-white shadow-glow lg:hidden"
        >
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>

        <div className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => renderLink(link))}
        </div>

        <div
          id="mobile-navigation"
          hidden={!open}
          className="absolute inset-x-0 top-full max-h-[65dvh] overflow-y-auto border-t border-slate-100 bg-white p-4 shadow-soft lg:hidden"
        >
          <div className="mx-auto grid max-w-7xl gap-2">
            {navLinks.map((link) => renderLink(link, true))}
          </div>
        </div>
      </nav>
    </header>
  );
}
