import { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Dashboard from "./components/Dashboard";

function App() {

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("None");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks(prevTasks => [...prevTasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const updateStatus = (id, newStatus) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  const editTask = (updatedTask) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  };

  const filteredTasks = tasks.filter(task =>
    (statusFilter === "All" || task.status === statusFilter) &&
    (priorityFilter === "All" || task.priority === priorityFilter)
  );

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortOrder === "None") return 0;
    if (sortOrder === "Earliest") return new Date(a.dueDate) - new Date(b.dueDate);
    if (sortOrder === "Latest") return new Date(b.dueDate) - new Date(a.dueDate);
    return 0;
  });

  return (
    <div className="App">
      <h1>Smart Task Dashboard</h1>

      <Dashboard tasks={tasks} />

      <div className="controls">

        <select onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="All">All Status</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <select onChange={(e) => setPriorityFilter(e.target.value)}>
          <option value="All">All Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="None">No Sorting</option>
          <option value="Earliest">Earliest Due Date</option>
          <option value="Latest">Latest Due Date</option>
        </select>

      </div>

      <TaskForm addTask={addTask} />

      <TaskList
        tasks={sortedTasks}
        deleteTask={deleteTask}
        updateStatus={updateStatus}
        editTask={editTask}
      />
    </div>
  );
}

export default App;