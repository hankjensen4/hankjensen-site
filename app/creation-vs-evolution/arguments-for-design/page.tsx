import SubcategoryPage from "@/components/SubcategoryPage";

export default function ArgumentsForDesignPage() {
  return (
    <SubcategoryPage
      categoryTitle="Creation vs Evolution"
      categoryHref="/creation-vs-evolution"
      currentTitle="Arguments for Design"
      description="Design arguments examine order, information, and fine-tuning as potential signs of purposeful intelligence."
      points={[
        "Fine-tuning of the universe",
        "Information in biological systems",
        "Philosophical arguments for design"
      ]}
    />
  );
}
