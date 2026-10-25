import { contact, prices } from "@/data/content";
import SectionHeading from "./SectionHeading";

export default function PricesSection() {
  const whatsappHref = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.message)}`;

  return (
    <section
      id="prices"
      aria-labelledby="prices-title"
      tabIndex={-1}
      className="section-space prices-section"
    >
      <div className="container-shell">
        <SectionHeading
          id="prices-title"
          eyebrow="INVEST IN YOUR NEXT STEP"
          title="الأسعار"
        />
        <div className="prices-grid" dir="rtl">
          {prices.map((item, index) => (
            <article
              key={item.title}
              className="price-card reveal"
              style={{ "--reveal-delay": `${(index % 3) * 70}ms` }}
            >
              <div className="price-art">
                <span className="price-service-label" dir="ltr">
                  JOELLE / 0{index + 1}
                </span>
                <img
                  src={item.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width="224"
                  height="176"
                />
              </div>
              <div className="price-body">
                <h3>{item.title}</h3>
                {item.secondTitle ? (
                  <p className="price-subtitle" dir="ltr">
                    {item.secondTitle}
                  </p>
                ) : null}
                <p className="price-value" dir="ltr">
                  {item.price}
                </p>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-outline"
                >
                  تواصل معنا <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
