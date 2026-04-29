import SubcategoryPage from "@/components/SubcategoryPage";

export default function LoveInActionPage() {
  return (
    <SubcategoryPage
      categoryTitle="Love and Truth"
      categoryHref="/love-and-truth"
      currentTitle="Love in Action"
      description="Love becomes meaningful when it is practiced. This page focuses on practical ways to show care, integrity, and service."
      points={[
        "Everyday acts of compassion",
        "Serving with consistency",
        "Balancing love and boundaries"
      ]}
    />
  );
}
