import GroupPreviewCard from "./GroupPreviewCard";

export default function GroupBody() {
  const groups = [];
  return (
    <div className="grid grid-cols-3 mt-12 gap-6">
      {groups.map((group, i) => (
        <GroupPreviewCard key={i} {...group} />
      ))}
    </div>
  );
}
