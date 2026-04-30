import Link from "next/link";

export default function CreationVsEvolutionPage() {
  // Edit this list to manage the main Creation vs Evolution topics.
  const mainTopics = [
    {
      title: "Arguments for Design",
      description: "Core arguments that point to purpose and intelligent design.",
      href: "/creation-vs-evolution/arguments-for-design"
    },
    {
      title: "Evolutionary Theory Overview",
      description: "A basic overview of evolutionary claims and mechanisms.",
      href: "/creation-vs-evolution/evolutionary-theory-overview"
    },
    {
      title: "Science and Philosophy",
      description: "Where scientific method and worldview assumptions intersect.",
      href: "/creation-vs-evolution/science-and-philosophy"
    },
    {
      title: "Human Purpose and Identity",
      description: "How origin views influence meaning, value, and identity.",
      href: "/creation-vs-evolution/human-purpose-and-identity"
    }
  ];

  // Edit this list to manage the Flood section links.
  const floodTopics = [
    {
      title: "Biblical Case for a Global Flood",
      description: "Text-based reasons for understanding the Flood as global.",
      href: "/creation-vs-evolution/biblical-case"
    },
    {
      title: "Scientific Evidence",
      description: "Placeholder for scientific arguments and supporting data.",
      href: "#"
    },
    {
      title: "Common Objections",
      description: "Placeholder for common objections and responses.",
      href: "#"
    },
    {
      title: "Ark Logistics",
      description: "Placeholder for ark size, animals, and practical logistics.",
      href: "#"
    }
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="grid grid-cols-1 gap-6">
        {mainTopics.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-slate-300"
          >
            <h2 className="text-xl font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-2 text-slate-600">{item.description}</p>
          </Link>
        ))}
      </section>

      <section className="mt-8">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-slate-900">The Flood</h2>
        <div className="mt-4 grid grid-cols-1 gap-6">
          {floodTopics.map((item) => (
            <Link
              key={`${item.title}-${item.href}`}
              href={item.href}
              className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-slate-300"
            >
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-slate-600">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
