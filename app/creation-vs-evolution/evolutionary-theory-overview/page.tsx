import SubcategoryPage from "@/components/SubcategoryPage";

export default function EvolutionaryTheoryOverviewPage() {
  return (
    <SubcategoryPage
      categoryTitle="Creation vs Evolution"
      categoryHref="/creation-vs-evolution"
      currentTitle="Evolutionary Theory Overview"
      description="This overview summarizes key concepts in evolutionary theory and the questions often discussed around them."
      points={[
        "Mutation and natural selection",
        "Common ancestry claims",
        "Current debates and open questions"
      ]}
    />
  );
}
