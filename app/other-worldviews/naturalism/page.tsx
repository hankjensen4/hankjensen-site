import SubcategoryPage from "@/components/SubcategoryPage";

export default function NaturalismPage() {
  return (
    <SubcategoryPage
      categoryTitle="Other Worldviews"
      categoryHref="/other-worldviews"
      currentTitle="Naturalism"
      description="Naturalism explains reality in terms of matter and natural processes without reference to the supernatural."
      points={[
        "Core assumptions of naturalism",
        "Strengths and limitations",
        "Implications for morality and meaning"
      ]}
    />
  );
}
