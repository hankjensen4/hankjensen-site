import SubcategoryPage from "@/components/SubcategoryPage";

export default function EthicsInModernLifePage() {
  return (
    <SubcategoryPage
      categoryTitle="Life and Culture"
      categoryHref="/life-and-culture"
      currentTitle="Ethics in Modern Life"
      description="Modern ethical questions are complex. This page offers a framework for thinking with clarity, conviction, and compassion."
      points={[
        "Moral principles and consistency",
        "Navigating gray areas",
        "Applying convictions in public life"
      ]}
    />
  );
}
