function AddEntryButton({ onClick }) {
  return (
    <div className="flex items-center justify-between p-4">
      <button className="btn btn-accent rounded-2xl" onClick={onClick}>
        Add Entry
      </button>
    </div>
  );
}
export default AddEntryButton;
