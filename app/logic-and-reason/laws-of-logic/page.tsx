import SubcategoryPage from "@/components/SubcategoryPage";

export default function LawsOfLogicPage() {
  return (
    <SubcategoryPage
      categoryTitle="Logic and Reason"
      categoryHref="/logic-and-reason"
      currentTitle="Laws of Logic"
      description="The laws of logic provide a stable framework for clear reasoning and help us avoid contradiction and confusion."
      points={[
        "Law of non-contradiction",
        "Law of identity",
        "Law of excluded middle"
      ]}
    />
  );
}
