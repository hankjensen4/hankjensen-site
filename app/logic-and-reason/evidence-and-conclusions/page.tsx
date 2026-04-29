import SubcategoryPage from "@/components/SubcategoryPage";

export default function EvidenceAndConclusionsPage() {
  return (
    <SubcategoryPage
      categoryTitle="Logic and Reason"
      categoryHref="/logic-and-reason"
      currentTitle="Evidence and Conclusions"
      description="Sound conclusions require proportionate evidence and fair interpretation, especially on important worldview questions."
      points={[
        "Burden of proof",
        "Inference to the best explanation",
        "Avoiding overreach in conclusions"
      ]}
    />
  );
}
