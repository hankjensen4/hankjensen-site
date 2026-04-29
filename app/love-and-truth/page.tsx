import CategoryHubPage from "@/components/CategoryHubPage";

export default function LoveAndTruthPage() {
  return (
    <CategoryHubPage
      title="Love and Truth"
      description="Discover how grace, compassion, and truth work together in a healthy worldview."
      subcategories={[
        {
          title: "Truth with Humility",
          description: "Holding convictions with patience, gentleness, and care.",
          href: "/love-and-truth/truth-with-humility"
        },
        {
          title: "Love in Action",
          description: "Practical ways love can shape daily life and decisions.",
          href: "/love-and-truth/love-in-action"
        },
        {
          title: "Justice and Mercy",
          description: "How justice and mercy work together rather than against each other.",
          href: "/love-and-truth/justice-and-mercy"
        },
        {
          title: "Difficult Conversations",
          description: "Approaches for hard topics with clarity and compassion.",
          href: "/love-and-truth/difficult-conversations"
        }
      ]}
    />
  );
}
