import { useState } from "react";

function TaskForm({ addTask }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      title,
      description,
      priority,
      dueDate,
      status: "To Do"
    };

    addTask(newTask);

    setTitle("");
    setDescription("");
    setPriority("Medium");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <select onChange={(e) => setPriority(e.target.value)} value={priority}>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <input
        type="date"
        onChange={(e) => setDueDate(e.target.value)}
        value={dueDate}
        required
      />

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;