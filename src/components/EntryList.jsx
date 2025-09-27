import DiaryEntryCard from "./DiaryEntryCard";

function EntryList({ entries }) {
  if (entries.length === 0) {
    return <p className="text-gray-500">No entries yet.</p>;
  }

  const sorted = [...entries].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sorted.map((entry, i) => (
        <DiaryEntryCard key={i} entry={entry} />
      ))}
    </div>
  );
}

export default EntryList;
