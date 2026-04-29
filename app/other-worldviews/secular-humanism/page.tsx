import SubcategoryPage from "@/components/SubcategoryPage";

export default function SecularHumanismPage() {
  return (
    <SubcategoryPage
      categoryTitle="Other Worldviews"
      categoryHref="/other-worldviews"
      currentTitle="Secular Humanism"
      description="Secular humanism emphasizes human reason and ethics without grounding meaning in God or revelation."
      points={[
        "Human-centered ethics",
        "Reason and autonomy",
        "Questions about objective meaning"
      ]}
    />
  );
}
