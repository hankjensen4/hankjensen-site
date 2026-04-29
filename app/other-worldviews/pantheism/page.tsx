import SubcategoryPage from "@/components/SubcategoryPage";

export default function PantheismPage() {
  return (
    <SubcategoryPage
      categoryTitle="Other Worldviews"
      categoryHref="/other-worldviews"
      currentTitle="Pantheism"
      description="Pantheism sees ultimate reality as divine and often blurs distinction between God, humanity, and nature."
      points={[
        "Key pantheistic beliefs",
        "View of God and self",
        "Comparison with Christian theism"
      ]}
    />
  );
}
