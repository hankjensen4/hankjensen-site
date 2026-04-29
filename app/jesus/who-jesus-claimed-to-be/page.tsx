import SubcategoryPage from "@/components/SubcategoryPage";

export default function WhoJesusClaimedToBePage() {
  return (
    <SubcategoryPage
      categoryTitle="Jesus"
      categoryHref="/jesus"
      currentTitle="Who Jesus Claimed to Be"
      description="This section focuses on Jesus' direct claims about His identity and mission, and why those claims still matter for truth and faith."
      points={[
        "Names and titles Jesus used",
        "Statements about His authority",
        "How people responded to His claims"
      ]}
    />
  );
}
