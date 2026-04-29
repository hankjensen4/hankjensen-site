import SubcategoryPage from "@/components/SubcategoryPage";

export default function JusticeAndMercyPage() {
  return (
    <SubcategoryPage
      categoryTitle="Love and Truth"
      categoryHref="/love-and-truth"
      currentTitle="Justice and Mercy"
      description="Justice and mercy are both essential. This section considers how accountability and compassion can work together."
      points={[
        "Why justice matters",
        "Why mercy matters",
        "Applying both in real situations"
      ]}
    />
  );
}
