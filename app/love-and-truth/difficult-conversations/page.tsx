import SubcategoryPage from "@/components/SubcategoryPage";

export default function DifficultConversationsPage() {
  return (
    <SubcategoryPage
      categoryTitle="Love and Truth"
      categoryHref="/love-and-truth"
      currentTitle="Difficult Conversations"
      description="Hard conversations can become constructive when approached with patience, clarity, and a goal of understanding."
      points={[
        "Preparing for hard topics",
        "Reducing defensiveness",
        "Pursuing clarity and respect"
      ]}
    />
  );
}
