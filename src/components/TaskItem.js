import { useState } from "react";

function TaskItem({ task, deleteTask, updateStatus, editTask }) {

  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleChange = (e) => {
    setEditedTask({
      ...editedTask,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    editTask(editedTask);
    setIsEditing(false);
  };

  return (
    <div className="task-card">

      {isEditing ? (
        <>
          <input name="title" value={editedTask.title} onChange={handleChange} />
          <input name="description" value={editedTask.description} onChange={handleChange} />

          <select name="priority" value={editedTask.priority} onChange={handleChange}>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

          <input type="date" name="dueDate" value={editedTask.dueDate} onChange={handleChange} />

          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Priority: {task.priority}</p>
          <p>Status: {task.status}</p>
          <p>Due Date: {task.dueDate}</p>

          <select value={task.status} onChange={(e) => updateStatus(task.id, e.target.value)}>
            <option>To Do</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>

          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </>
      )}

    </div>
  );
}

export default TaskItem;