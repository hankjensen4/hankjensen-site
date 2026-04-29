import CategoryHubPage from "@/components/CategoryHubPage";

export default function LifeAndCulturePage() {
  return (
    <CategoryHubPage
      title="Life and Culture"
      description="Apply faith and reason to everyday life, public culture, and personal decisions."
      subcategories={[
        {
          title: "Family and Relationships",
          description: "Building homes and friendships with wisdom, patience, and love.",
          href: "/life-and-culture/family-and-relationships"
        },
        {
          title: "Work and Purpose",
          description: "Thinking about vocation, calling, and meaningful contribution.",
          href: "/life-and-culture/work-and-purpose"
        },
        {
          title: "Media and Influence",
          description: "How media shapes beliefs and how to engage it wisely.",
          href: "/life-and-culture/media-and-influence"
        },
        {
          title: "Ethics in Modern Life",
          description: "Applying enduring principles to current ethical challenges.",
          href: "/life-and-culture/ethics-in-modern-life"
        }
      ]}
    />
  );
}
