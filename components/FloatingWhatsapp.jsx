import { contact } from '@/data/content';

export default function FloatingWhatsapp() {
  const href = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-16 w-16 place-items-center rounded-full bg-white shadow-glow ring-1 ring-emerald-200 transition hover:-translate-y-1"
    >
      <img src="/assets/images/whatsapp-icon-vector.png" alt="" className="h-14 w-14 animate-pulseSoft" />
    </a>
  );
}
