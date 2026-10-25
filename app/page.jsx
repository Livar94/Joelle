import { hero, contact } from "@/data/content";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import PricesSection from "@/components/PricesSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function HomePage() {
  const whatsappHref = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.message)}`;

  return (
    <>
      <section
        id="home"
        aria-labelledby="home-title"
        tabIndex={-1}
        className="hero-section"
      >
        <div className="hero-grid texture-grid" aria-hidden="true" />
        <div className="container-shell hero-layout" dir="rtl">
          <div className="hero-copy">
            <span className="eyebrow hero-eyebrow" dir="ltr">
              JOELLE ACADEMY
            </span>
            <div className="trust-label">
              <span className="trust-dot" aria-hidden="true" />
              {hero.subtitle}
            </div>
            <h1 id="home-title">
              {hero.title}
              <span className="title-dot">.</span>
            </h1>
            <p className="hero-description">
              سيرة ذاتية محترفة، رسالة تعريفية وحساب LinkedIn يعكس خبرتك.
            </p>
            <div className="hero-actions">
              <a href="#prices" className="button button-primary">
                اكتشف الأسعار <span aria-hidden="true">↗</span>
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="button button-outline"
              >
                تواصل معنا
              </a>
            </div>
            <div className="hero-specialties" dir="ltr">
              <span>ATS Friendly CV</span>
              <span>Cover Letter</span>
              <span>LinkedIn</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-orbit orbit-one" aria-hidden="true" />
            <div className="portrait-orbit orbit-two" aria-hidden="true" />
            <div className="portrait-stage">
              <span className="portrait-word" aria-hidden="true">
                joelle.
              </span>
              <img
                src="/assets/images/joelle.png"
                alt="جويل يمّين، Joelle Academy"
                width="1088"
                height="1495"
                fetchPriority="high"
                className="hero-portrait"
              />
            </div>
            <div className="portrait-caption" dir="ltr">
              <span className="caption-icon" aria-hidden="true">
                ↗
              </span>
              <div>
                <strong>Joelle Academy</strong>
                <span>CV · CAREER · CONFIDENCE</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-bottom container-shell">
          <span dir="ltr">YOUR NEXT CHAPTER STARTS HERE</span>
          <a href="#services" className="explore-link">
            اكتشف خدماتنا <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <PricesSection />
      <TestimonialsSection />
    </>
  );
}
