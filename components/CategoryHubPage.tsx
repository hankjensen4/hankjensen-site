import Link from "next/link";

type HubItem = {
  title: string;
  description: string;
  href: string;
};

type CategoryHubPageProps = {
  title: string;
  description: string;
  subcategories: HubItem[];
};

export default function CategoryHubPage({
  description,
  subcategories
}: CategoryHubPageProps) {
  return (
    <main className="page-main max-w-4xl">
      <section className="grid grid-cols-1 gap-6">
        {subcategories.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-slate-300"
          >
            <h2 className="text-xl font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-2 text-slate-600">{item.description || description}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
