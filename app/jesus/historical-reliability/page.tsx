import SubcategoryPage from "@/components/SubcategoryPage";

export default function HistoricalReliabilityPage() {
  return (
    <SubcategoryPage
      categoryTitle="Jesus"
      categoryHref="/jesus"
      currentTitle="Historical Reliability"
      description="This page looks at manuscript evidence, early sources, and historical methods used to examine the life of Jesus."
      points={[
        "Sources for Jesus in the first centuries",
        "Reliability of New Testament manuscripts",
        "How historians evaluate ancient claims"
      ]}
    />
  );
}
