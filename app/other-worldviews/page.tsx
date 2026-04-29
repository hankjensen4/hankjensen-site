import CategoryHubPage from "@/components/CategoryHubPage";

export default function OtherWorldviewsPage() {
  return (
    <CategoryHubPage
      title="Other Worldviews"
      description="Examine major belief systems and how they answer life’s deepest questions."
      subcategories={[
        {
          title: "Naturalism",
          description: "A look at a worldview grounded only in the material universe.",
          href: "/other-worldviews/naturalism"
        },
        {
          title: "Pantheism",
          description: "Exploring the belief that all reality is ultimately divine.",
          href: "/other-worldviews/pantheism"
        },
        {
          title: "Islam and Christianity",
          description: "Comparing key claims, beliefs, and views of God and salvation.",
          href: "/other-worldviews/islam-and-christianity"
        },
        {
          title: "Secular Humanism",
          description: "Understanding ethics and meaning without a theistic foundation.",
          href: "/other-worldviews/secular-humanism"
        }
      ]}
    />
  );
}
