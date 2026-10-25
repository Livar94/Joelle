import { contact } from "@/data/content";

export default function FloatingWhatsapp() {
  const href = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="whatsapp-link"
    >
      <img
        src="/assets/images/whatsapp-icon-vector.png"
        alt=""
        className="h-14 w-14"
      />
    </a>
  );
}
