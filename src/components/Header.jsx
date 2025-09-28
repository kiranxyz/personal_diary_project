import AddEntryButton from "./AddEntryButton";

function Header({ onAdd }) {
  return (
    <div className="flex items-center justify-between bg-emerald-200">
      <h1 className="text-3xl font-bold p-10">Anila's Personal Diary</h1>
      <AddEntryButton onClick={onAdd} />
    </div>
  );
}

export default Header;
