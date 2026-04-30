import SubcategoryPage from "@/components/SubcategoryPage";

export default function DeathAndResurrectionPage() {
  return (
    <SubcategoryPage
      categoryTitle="Jesus Christ"
      categoryHref="/jesus-christ"
      currentTitle="Death and Resurrection"
      description="The death and resurrection of Jesus are central to the Christian message, shaping forgiveness, hope, and new life."
      points={[
        "Meaning of the cross",
        "Historical resurrection claim",
        "Impact on Christian faith and practice"
      ]}
    />
  );
}
