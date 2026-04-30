import Link from "next/link";

const cards = [
  {
    title: "Jesus Christ",
    description:
      "Who He is, what He taught, and why He is the Son of God, Savior, and Creator revealed in Scripture.",
    href: "/jesus-christ"
  },
  {
    title: "Love and Truth",
    description: "How God defines love and truth, and why both must remain grounded in His Word.",
    href: "/love-and-truth"
  },
  {
    title: "Logic and Reason",
    description:
      "Using clear thinking and biblical truth to examine life’s biggest questions and test every belief.",
    href: "/logic-and-reason"
  },
  {
    title: "Creation vs Evolution",
    description:
      "What Scripture teaches about creation, origins, and design, and how it compares to naturalistic explanations.",
    href: "/creation-vs-evolution"
  },
  {
    title: "Other Worldviews",
    description:
      "Examining competing beliefs in light of Scripture and how they answer life’s ultimate questions.",
    href: "/other-worldviews"
  },
  {
    title: "Life and Culture",
    description:
      "Applying biblical truth to everyday life, relationships, and the challenges of the modern world.",
    href: "/life-and-culture"
  }
];

export default function Home() {
  return (
    <main className="page-main max-w-4xl">
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
