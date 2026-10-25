export default function SectionHeading({ id, eyebrow, title, light = false }) {
  return (
    <div
      className={`section-heading reveal${light ? " section-heading-light" : ""}`}
      dir="rtl"
    >
      <span className="eyebrow" dir="ltr">
        {eyebrow}
      </span>
      <h2 id={id}>{title}</h2>
      <span className="heading-line" aria-hidden="true" />
    </div>
  );
}
