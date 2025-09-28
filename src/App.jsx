import Header from "./components/Header";
import EntryList from "./components/EntryList";
import { useState, useEffect } from "react";
import AddEntryModal from "./components/AddEntryModal";
import ViewEntryModal from "./components/ViewEntryModal";
import Footer from "./components/Footer";

const App = () => {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("entries")) || [];
    setEntries(saved);
  }, []);
  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  return (
    <div>
      <Header onAdd={() => setIsAddModalOpen(true)} />
      <EntryList
        entries={entries}
        onSelect={(entry) => {
          setSelectedEntry(entry);
          setIsViewModalOpen(true);
        }}
      />
      <AddEntryModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={(entry) => setEntries([entry, ...entries])}
        entries={entries}
      />
      <ViewEntryModal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        entry={selectedEntry}
      />
      <Footer></Footer>
    </div>
  );
};

export default App;
