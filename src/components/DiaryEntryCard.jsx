function DiaryEntryCard({ entry, onClick }) {
  return (
    <div onClick={onClick} className="hover:shadow-md transition">
      <figure>
        <img src={entry.image} alt={entry.title} />
      </figure>
      <div>
        <h2 className="text-lg font-semibold">{entry.title}</h2>
        <p className="text-sm text-gray-500">{entry.date}</p>
      </div>
    </div>
  );
}

export default DiaryEntryCard;
