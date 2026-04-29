import CategoryHubPage from "@/components/CategoryHubPage";

export default function CreationVsEvolutionPage() {
  return (
    <CategoryHubPage
      title="Creation vs Evolution"
      description="Compare key perspectives on origins, design, and what they imply about meaning."
      subcategories={[
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
      ]}
    />
  );
}
