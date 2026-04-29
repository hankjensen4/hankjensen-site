import Link from "next/link";

type SubcategoryPageProps = {
  categoryTitle: string;
  categoryHref: string;
  currentTitle: string;
  description: string;
  points: string[];
};

export default function SubcategoryPage({
  categoryTitle,
  categoryHref,
  currentTitle,
  description,
  points
}: SubcategoryPageProps) {
  return (
    <main className="mx-auto max-w-4xl px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <nav className="text-center text-sm text-slate-600">
        <Link href="/" className="hover:text-slate-900">
          Home
        </Link>
        <span className="mx-2">&gt;</span>
        <Link href={categoryHref} className="hover:text-slate-900">
          {categoryTitle}
        </Link>
        <span className="mx-2">&gt;</span>
        <span className="text-slate-900">{currentTitle}</span>
      </nav>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-8 sm:p-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{currentTitle}</h1>
        <p className="mt-4 text-slate-700">{description}</p>

        <ul className="mt-6 list-disc space-y-2 pl-5 text-slate-700">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
