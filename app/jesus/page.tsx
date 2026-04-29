import CategoryHubPage from "@/components/CategoryHubPage";

export default function JesusPage() {
  return (
    <CategoryHubPage
      title="Jesus"
      description="Explore the person, claims, and significance of Jesus in history and faith."
      subcategories={[
        {
          title: "Who Jesus Claimed to Be",
          description: "A look at Jesus' own words and identity claims.",
          href: "/jesus/who-jesus-claimed-to-be"
        },
        {
          title: "Teachings and Parables",
          description: "Key themes from Jesus' teaching and stories.",
          href: "/jesus/teachings-and-parables"
        },
        {
          title: "Death and Resurrection",
          description: "Why the cross and resurrection are central to Christian faith.",
          href: "/jesus/death-and-resurrection"
        },
        {
          title: "Historical Reliability",
          description: "How historical sources and early testimony are evaluated.",
          href: "/jesus/historical-reliability"
        }
      ]}
    />
  );
}
