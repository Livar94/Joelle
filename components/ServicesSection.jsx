import { services } from "@/data/content";
import SectionHeading from "./SectionHeading";

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      tabIndex={-1}
      className="section-space services-section"
    >
      <div className="container-shell">
        <SectionHeading
          id="services-title"
          eyebrow="WHAT WE DO"
          title="الخدمات"
        />
        <div className="services-grid" dir="rtl">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="service-card reveal"
              style={{ "--reveal-delay": `${index * 80}ms` }}
            >
              <div className="service-art">
                <span className="card-index" aria-hidden="true">
                  0{index + 1}
                </span>
                <img
                  src={service.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width="208"
                  height="176"
                />
              </div>
              <div className="service-body">
                <h3>{service.title}</h3>
                <div className="service-description">
                  {service.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <a href="#prices" className="text-link">
                  اكتشف الأسعار <span aria-hidden="true">←</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
