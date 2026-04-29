import CategoryHubPage from "@/components/CategoryHubPage";

export default function LogicAndReasonPage() {
  return (
    <CategoryHubPage
      title="Logic and Reason"
      description="Build a framework for thinking clearly, asking better questions, and testing ideas."
      subcategories={[
        {
          title: "Laws of Logic",
          description: "Foundational principles that guide consistent reasoning.",
          href: "/logic-and-reason/laws-of-logic"
        },
        {
          title: "Critical Thinking",
          description: "Asking better questions and evaluating ideas carefully.",
          href: "/logic-and-reason/critical-thinking"
        },
        {
          title: "Common Fallacies",
          description: "Recognizing weak arguments and avoiding reasoning mistakes.",
          href: "/logic-and-reason/common-fallacies"
        },
        {
          title: "Evidence and Conclusions",
          description: "Connecting evidence to sound conclusions with honesty.",
          href: "/logic-and-reason/evidence-and-conclusions"
        }
      ]}
    />
  );
}
