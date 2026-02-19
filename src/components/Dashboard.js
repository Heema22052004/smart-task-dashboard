function Dashboard({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter(t => t.status === "Completed").length;
  const pending = total - completed;

  return (
    <div style={{
      marginBottom: "20px",
      padding: "10px",
      border: "1px solid black",
      borderRadius: "8px"
    }}>
      <h2>Dashboard Summary</h2>
      <p>Total Tasks: {total}</p>
      <p>Completed: {completed}</p>
      <p>Pending: {pending}</p>
    </div>
  );
}

export default Dashboard;