import SubcategoryPage from "@/components/SubcategoryPage";

export default function WorkAndPurposePage() {
  return (
    <SubcategoryPage
      categoryTitle="Life and Culture"
      categoryHref="/life-and-culture"
      currentTitle="Work and Purpose"
      description="Work can be more than survival. This page explores calling, service, and meaning in everyday vocation."
      points={[
        "Calling and vocation",
        "Excellence and integrity",
        "Serving others through work"
      ]}
    />
  );
}
