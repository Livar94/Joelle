import { comments } from "@/data/content";
import { imageDimensions } from "@/data/imageDimensions";
import SectionHeading from "./SectionHeading";

export default function TestimonialsSection() {
  return (
    <section
      id="comments"
      aria-labelledby="comments-title"
      tabIndex={-1}
      className="section-space testimonials-section"
    >
      <div className="container-shell">
        <SectionHeading
          id="comments-title"
          eyebrow="WORDS FROM OUR CLIENTS"
          title="آراء عملائنا"
        />
        <div className="testimonials-grid">
          {comments.map((image, index) => (
            <figure
              key={image}
              className="testimonial-card reveal"
              style={{ "--reveal-delay": `${(index % 3) * 60}ms` }}
            >
              <span className="quote-mark" aria-hidden="true">
                “
              </span>
              <img
                src={image}
                alt={`آراء عملائنا ${index + 1}`}
                width={imageDimensions[image].width}
                height={imageDimensions[image].height}
                loading="lazy"
                decoding="async"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
