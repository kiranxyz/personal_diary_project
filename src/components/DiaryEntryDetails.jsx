function DiaryEntryDetails({ entry }) {
  return (
    <div>
      <img src={entry.image} alt={entry.title} className="rounded-lg" />
      <h2 className="text-2xl">{entry.title}</h2>
      <p className="text-sm text-gray-500">{entry.date}</p>
      <p className="text-gray-700">{entry.content}</p>
    </div>
  );
}
