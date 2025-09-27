import Header from "./components/Header";
import DiaryEntryCard from "./components/DiaryEntryCard";
import EntryList from "./components/EntryList";
import { useState, useEffect } from "react";

const App = () => {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("entries")) || [];
    setEntries(saved);
  }, []);
  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  return (
    <div>
      <Header />
      <EntryList entries={entries} />
    </div>
  );
};

export default App;
