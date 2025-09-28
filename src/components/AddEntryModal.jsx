import EntryForm from "./EntryForm";

function AddEntryModal({ isOpen, onClose, onSave, entries }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-emerald-200 rounded-xl relative">
        <button onClick={onClose} className="btn btn-sm absolute right-4 top-4">
          ✕
        </button>
        <EntryForm cancel={onClose} save={onSave} entries={entries} />
      </div>
    </div>
  );
}

export default AddEntryModal;
