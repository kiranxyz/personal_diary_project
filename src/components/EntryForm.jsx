import { useState } from "react";

function EntryForm({ cancel, save, entries }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const saveEntry = (e) => {
    e.preventDefault();

    if (!title || !date || !image || !content) {
      setError("Please enter required fields!");
      return;
    }
    if (entries.some((e) => e.date === date)) {
      setError(
        "There is already and entry for this date please enter some other date."
      );
      return;
    }
    save({ title, date, image, content });
    setTitle("");
    setDate("");
    setImage("");
    setContent("");
    setError("");
    cancel();
  };
  return (
    <div>
      <form
        className="fieldset bg-emerald-200 border-base-300 rounded-box w-xs border p-4 rounded-2xl"
        onSubmit={saveEntry}
      >
        <h2 className="text-xl font-bold">New Diary Entry</h2>

        <label>Title</label>
        <input
          type="text"
          className="input w-full rounded-2xl"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Date</label>
        <input
          type="date"
          className="input w-full rounded-2xl"
          placeholder="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label>Image URL</label>
        <input
          type="text"
          className="input input-bordered input-accent w-full"
          placeholder="Enter image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <label>Content</label>
        <textarea
          className="textarea textarea-bordered w-full rounded-2xl"
          placeholder="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        {error && (
          <div role="alert" className="alert alert-error mt-2">
            <span>{error}</span>
          </div>
        )}
        <div className="flex justify-center">
          <button className="btn btn-accent rounded-2xl mt-4 w-30">
            Save Entry
          </button>
        </div>
      </form>
    </div>
  );
}
export default EntryForm;
