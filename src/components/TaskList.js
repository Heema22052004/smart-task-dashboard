import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, updateStatus, editTask }) {

  if (tasks.length === 0) {
    return <p>No tasks added</p>;
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          updateStatus={updateStatus}
          editTask={editTask}
        />
      ))}
    </div>
  );
}

export default TaskList;