import PageHero from '@/components/PageHero';
import { comments } from '@/data/content';

export const metadata = {
  title: 'آراء عملائنا | Joelle Academy',
};

export default function CommentsPage() {
  return (
    <>
      <PageHero title="آراء عملائنا" />
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="container-shell columns-1 gap-6 sm:columns-2 lg:columns-3">
          {comments.map((image, index) => (
            <figure key={image} className="mb-6 break-inside-avoid overflow-hidden rounded-[2rem] bg-slate-50 p-3 shadow-soft ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-glow">
              <img src={image} alt={`آراء عملائنا ${index + 1}`} className="h-auto w-full rounded-[1.5rem] object-cover" />
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
