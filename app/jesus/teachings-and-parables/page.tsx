import SubcategoryPage from "@/components/SubcategoryPage";

export default function TeachingsAndParablesPage() {
  return (
    <SubcategoryPage
      categoryTitle="Jesus"
      categoryHref="/jesus"
      currentTitle="Teachings and Parables"
      description="Explore core themes in Jesus' teaching and how His parables reveal truth about God, people, and the kingdom of heaven."
      points={[
        "Love of God and neighbor",
        "The Sermon on the Mount",
        "Parables of grace and repentance"
      ]}
    />
  );
}
