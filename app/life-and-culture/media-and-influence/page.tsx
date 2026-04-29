import SubcategoryPage from "@/components/SubcategoryPage";

export default function MediaAndInfluencePage() {
  return (
    <SubcategoryPage
      categoryTitle="Life and Culture"
      categoryHref="/life-and-culture"
      currentTitle="Media and Influence"
      description="Media can shape beliefs and desires quickly. This section helps readers engage culture thoughtfully and wisely."
      points={[
        "Discernment in media consumption",
        "How stories shape worldview",
        "Using media with intention"
      ]}
    />
  );
}
