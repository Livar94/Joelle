import { about } from "@/data/content";
import SectionHeading from "./SectionHeading";
import AboutVideo from "./AboutVideo";

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      tabIndex={-1}
      className="section-space about-section"
    >
      <AboutVideo />
      <div className="about-overlay" aria-hidden="true" />
      <div className="container-shell about-layout" dir="rtl">
        <div className="about-copy">
          <SectionHeading
            id="about-title"
            eyebrow="THE PEOPLE BEHIND YOUR NEXT STEP"
            title={about.title}
            light
          />
          <p className="reveal">
            {about.textBeforeBreak}
            <br />
            {about.textAfterBreak}
          </p>
          <a
            href={about.link}
            target="_blank"
            rel="noreferrer"
            className="button button-gold reveal"
          >
            {about.linkText} <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="about-art reveal">
          <span className="about-art-label" dir="ltr">
            BUILT AROUND YOUR AMBITION
          </span>
          <img
            src="/assets/images/MicrosoftTeams-image.png"
            alt="شخصيات من مجالات مهنية مختلفة"
            loading="lazy"
            decoding="async"
            width="2048"
            height="683"
          />
          <div className="about-art-footer" dir="ltr">
            <span>YOUR EXPERIENCE.</span>
            <strong>YOUR NEXT OPPORTUNITY.</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
