type SubcategoryPageProps = {
  categoryTitle: string;
  categoryHref: string;
  currentTitle: string;
  description: string;
  points: string[];
};

export default function SubcategoryPage({
  currentTitle,
  description,
  points
}: SubcategoryPageProps) {
  return (
    <main className="page-main max-w-4xl">
      <section className="rounded-xl border border-slate-200 bg-white p-8 sm:p-10">
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
