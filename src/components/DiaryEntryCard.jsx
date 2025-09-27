function DiaryEntryCard({ entry }) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="card-body"></div>
      <figure>
        <img
          src="https://share.google/images/W50NrZ73bvtzdqGn8"
          alt="Fitness"
        />
      </figure>
      <div className="p-4">
        <h2 className="text-lg font-semibold">{entry.title}</h2>
        <p className="text-sm text-gray-500">{entry.date}</p>
      </div>
    </div>
  );
}
export default DiaryEntryCard;
