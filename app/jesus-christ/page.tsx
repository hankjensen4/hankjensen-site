import CategoryHubPage from "@/components/CategoryHubPage";

export default function JesusChristPage() {
  return (
    <CategoryHubPage
      title="Jesus Christ"
      description="Explore the person, claims, and significance of Jesus Christ in history and faith."
      subcategories={[
        {
          title: "Who Jesus Christ Is",
          description: "What Scripture reveals about the identity of Jesus Christ—His claims, His works, and why He is Lord, Savior, and God in the flesh.",
          href: "/jesus-christ/who-jesus-christ-is"
        },
        {
          title: "Teachings and Parables",
          description: "Key themes from Jesus' teaching and stories.",
          href: "/jesus-christ/teachings-and-parables"
        },
        {
          title: "Death and Resurrection",
          description: "Why the cross and resurrection are central to Christian faith.",
          href: "/jesus-christ/death-and-resurrection"
        },
        {
          title: "Historical Reliability",
          description: "How historical sources and early testimony are evaluated.",
          href: "/jesus-christ/historical-reliability"
        }
      ]}
    />
  );
}
