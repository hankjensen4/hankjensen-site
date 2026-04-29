import SubcategoryPage from "@/components/SubcategoryPage";

export default function IslamAndChristianityPage() {
  return (
    <SubcategoryPage
      categoryTitle="Other Worldviews"
      categoryHref="/other-worldviews"
      currentTitle="Islam and Christianity"
      description="This section compares central claims in Islam and Christianity, including views of God, Jesus, and salvation."
      points={[
        "Who is Jesus?",
        "Scripture and revelation",
        "Grace, works, and salvation"
      ]}
    />
  );
}
