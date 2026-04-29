import SubcategoryPage from "@/components/SubcategoryPage";

export default function ScienceAndPhilosophyPage() {
  return (
    <SubcategoryPage
      categoryTitle="Creation vs Evolution"
      categoryHref="/creation-vs-evolution"
      currentTitle="Science and Philosophy"
      description="Science answers many important questions, but philosophical assumptions also shape how evidence is interpreted."
      points={[
        "Methodological limits of science",
        "Role of worldview assumptions",
        "How science and philosophy interact"
      ]}
    />
  );
}
