function TaskItem({ task, deleteTask, updateStatus }) {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>

      <p>
  Priority:{" "}
  <span style={{
    color:
      task.priority === "High" ? "red" :
      task.priority === "Medium" ? "orange" :
      "green"
  }}>
    {task.priority}
  </span>
</p>
      <p>Status: {task.status}</p>
      <p>Due Date: {task.dueDate}</p>

      <select
        value={task.status}
        onChange={(e) => updateStatus(task.id, e.target.value)}
      >
        <option>To Do</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

      <button onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </div>
  );
}

export default TaskItem;