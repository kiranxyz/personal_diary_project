import DiaryEntryCard from "./DiaryEntryCard";

function EntryList({ entries, onSelect }) {
  if (entries.length === 0) {
    return (
      <div className="bg-slate-400">
        <p className="text-neutral-700">No entries yet.</p>
      </div>
    );
  }

  const sorted = [...entries].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border-y-gray-400">
      {sorted.map((entry, i) => (
        <DiaryEntryCard key={i} entry={entry} onClick={() => onSelect(entry)} />
      ))}
    </div>
  );
}

export default EntryList;
