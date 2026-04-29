import SubcategoryPage from "@/components/SubcategoryPage";

export default function FamilyAndRelationshipsPage() {
  return (
    <SubcategoryPage
      categoryTitle="Life and Culture"
      categoryHref="/life-and-culture"
      currentTitle="Family and Relationships"
      description="Healthy relationships are built over time through trust, humility, forgiveness, and intentional care."
      points={[
        "Strong foundations in family life",
        "Communication and conflict repair",
        "Loyalty, forgiveness, and growth"
      ]}
    />
  );
}
