import { contact, socialLinks } from "@/data/content";

export default function Footer() {
  return (
    <footer className="site-footer" dir="ltr">
      <div className="container-shell">
        <div className="footer-top reveal">
          <a href="#home" className="footer-brand">
            Joelle Academy<span>.</span>
          </a>
          <a href="#home">العودة إلى الأعلى ↑</a>
        </div>
        <div className="footer-details reveal">
          <div className="footer-contact">
            <h2>GET IN TOUCH</h2>
            <a href={`tel:${contact.phone}`}>Phone: {contact.phone}</a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
          <div>
            <h2>BUSINESS HOURS</h2>
            <p>{contact.hours}</p>
          </div>
          <div>
            <h2>FOLLOW JOELLE</h2>
            <div className="footer-socials">
              <a
                href={socialLinks.instagram}
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                IG
              </a>
              <a
                href={socialLinks.linkedin}
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                in
              </a>
              <a
                href={socialLinks.tiktok}
                aria-label="TikTok"
                target="_blank"
                rel="noreferrer"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          JOELLE ACADEMY · CV & CAREER SERVICES
        </div>
      </div>
    </footer>
  );
}
