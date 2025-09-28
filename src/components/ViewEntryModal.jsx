import EntryDetails from "./EntryDetails";

function ViewEntryModal({ isOpen, onClose, entry }) {
  if (!isOpen || !entry) return null;

  return (
    <div className="flex items-center justify-center bg-emerald-200">
      <div className="bg-white rounded-xl">
        <button onClick={onClose} className="btn btn-sm absolute right-4 top-1">
          ✕
        </button>
        <EntryDetails entry={entry} />
      </div>
    </div>
  );
}

export default ViewEntryModal;
