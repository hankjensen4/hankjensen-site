import SubcategoryPage from "@/components/SubcategoryPage";

export default function CommonFallaciesPage() {
  return (
    <SubcategoryPage
      categoryTitle="Logic and Reason"
      categoryHref="/logic-and-reason"
      currentTitle="Common Fallacies"
      description="Logical fallacies can sound persuasive while still being weak arguments. Identifying them improves honest dialogue."
      points={[
        "Straw man and false dilemma",
        "Ad hominem attacks",
        "Appeal to emotion vs sound reasoning"
      ]}
    />
  );
}
