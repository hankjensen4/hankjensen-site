import SubcategoryPage from "@/components/SubcategoryPage";

export default function CriticalThinkingPage() {
  return (
    <SubcategoryPage
      categoryTitle="Logic and Reason"
      categoryHref="/logic-and-reason"
      currentTitle="Critical Thinking"
      description="Critical thinking helps us test assumptions, evaluate evidence, and make better judgments in complex discussions."
      points={[
        "Asking clarifying questions",
        "Distinguishing facts from claims",
        "Evaluating source quality"
      ]}
    />
  );
}
