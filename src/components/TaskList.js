import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, updateStatus }) {
  return (
    <div>
      <h2>Task List</h2>

      {tasks.length === 0 ? (
        <p>No tasks added</p>
      ) : (
        tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            updateStatus={updateStatus}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;