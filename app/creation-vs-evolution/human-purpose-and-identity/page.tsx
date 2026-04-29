import SubcategoryPage from "@/components/SubcategoryPage";

export default function HumanPurposeAndIdentityPage() {
  return (
    <SubcategoryPage
      categoryTitle="Creation vs Evolution"
      categoryHref="/creation-vs-evolution"
      currentTitle="Human Purpose and Identity"
      description="Views of origins often shape how we understand human value, moral responsibility, and the purpose of life."
      points={[
        "What gives human life value",
        "Identity and meaning",
        "Moral responsibility and dignity"
      ]}
    />
  );
}
