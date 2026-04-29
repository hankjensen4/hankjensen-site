import Link from "next/link";

const cards = [
  {
    title: "Jesus",
    description: "Who Jesus is, what He taught, and why His life still matters today.",
    href: "/jesus"
  },
  {
    title: "Love and Truth",
    description: "How compassion and conviction belong together in a meaningful worldview.",
    href: "/love-and-truth"
  },
  {
    title: "Logic and Reason",
    description: "Using clear thinking, evidence, and coherence to evaluate the big questions.",
    href: "/logic-and-reason"
  },
  {
    title: "Creation vs Evolution",
    description: "Comparing major explanations for origins, design, and human purpose.",
    href: "/creation-vs-evolution"
  },
  {
    title: "Other Worldviews",
    description: "Exploring competing beliefs and how they answer life’s foundational questions.",
    href: "/other-worldviews"
  },
  {
    title: "Life and Culture",
    description: "Applying timeless truths to modern culture, relationships, and daily life.",
    href: "/life-and-culture"
  }
];

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="grid grid-cols-1 gap-6">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="rounded-xl border border-slate-200 bg-white p-4"
          >
            <h2 className="text-xl font-semibold text-slate-900">{card.title}</h2>
            <p className="mt-2 text-slate-600">{card.description}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
