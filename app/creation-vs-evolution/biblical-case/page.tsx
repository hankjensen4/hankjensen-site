import Link from "next/link";

export default function BiblicalCasePage() {
  // Edit this content block to adjust the five textual reasons.
  const reasons = [
    {
      title: "The Rainbow Covenant (Genesis 9)",
      body: "God promised never again to destroy the earth with a flood. Local floods happen all the time, so the original flood must have been unique and unmatched—something far greater than any regional event."
    },
    {
      title: "The Purpose of the Ark",
      body: "God brought animals onto the ark \"to keep seed alive on the face of all the earth\" (Genesis 7:3). That purpose only makes sense if the destruction extended across the whole earth, not just one region."
    },
    {
      title: "Repeated Universal Language",
      body: "\"All flesh died\"; \"All the high mountains under the whole heaven were covered\"; \"Everything on dry land died\". The text stacks universal descriptions to communicate total judgment."
    },
    {
      title: "Consistent Historical Reading",
      body: "From early Jewish historians like Josephus to Christian thinkers like Augustine of Hippo, the flood was widely understood as global."
    },
    {
      title: "A Unique, One-Time Judgment",
      body: "The flood is presented as a singular, world-defining event that reset humanity and established a covenant never to be repeated."
    }
  ];

  // Edit this list to change related resources at the bottom.
  const relatedLinks = [
    { label: "Creation vs Evolution", href: "/creation-vs-evolution" },
    { label: "What is Truth", href: "#" },
    { label: "Authority of Scripture", href: "#" }
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="rounded-xl border border-slate-200 bg-white p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Biblical Case for a Global Flood
        </h1>
        <p className="mt-4 text-slate-700">
          The Bible presents the flood not as a local disaster, but as a global judgment affecting all
          humanity and land-dwelling life. Here are five reasons the text itself supports that
          conclusion.
        </p>

        <div className="mt-6 space-y-5">
          {reasons.map((reason) => (
            <section key={reason.title}>
              <h2 className="text-lg font-semibold text-slate-900">{reason.title}</h2>
              <p className="mt-2 text-slate-700">{reason.body}</p>
            </section>
          ))}
        </div>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Video Explanation</h2>
        <div className="mt-4 aspect-video w-full overflow-hidden rounded-lg border border-slate-200">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/pF8edVutP2s"
            title="Biblical Case for a Global Flood"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Related</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
          {relatedLinks.map((item) => (
            <li key={`${item.label}-${item.href}`}>
              <Link href={item.href} className="hover:text-slate-900 hover:underline">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
