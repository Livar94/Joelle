import { waySteps } from "@/data/content";
import SectionHeading from "./SectionHeading";

export default function ProcessSection() {
  return (
    <section
      id="theway"
      aria-labelledby="theway-title"
      tabIndex={-1}
      className="section-space process-section"
    >
      <div className="texture-grid process-grid" aria-hidden="true" />
      <div className="container-shell">
        <SectionHeading
          id="theway-title"
          eyebrow="A CLEAR PATH FORWARD"
          title="الطريقة"
        />
        <div className="steps-grid" dir="rtl">
          {waySteps.map((step, index) => (
            <article
              key={step.number}
              className="step-card reveal"
              style={{ "--reveal-delay": `${Math.min(index, 3) * 70}ms` }}
            >
              <span className="step-number" aria-label={`الخطوة ${index + 1}`}>
                0{index + 1}
              </span>
              <img
                src={step.image}
                alt=""
                loading="lazy"
                decoding="async"
                width="176"
                height="144"
              />
              <h3>{step.text}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
