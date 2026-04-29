type PlaceholderPageProps = {
  title: string;
  description: string;
  subtopics: string[];
};

export default function PlaceholderPage({
  title,
  description,
  subtopics
}: PlaceholderPageProps) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="rounded-xl border border-slate-200 bg-white p-8 sm:p-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h1>
        <p className="mt-3 text-lg text-slate-700">{description}</p>
      </section>

      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">Subtopics</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
          {subtopics.map((subtopic) => (
            <li key={subtopic}>{subtopic}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
