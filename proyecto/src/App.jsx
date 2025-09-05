import React, { useState } from "react";
import "./App.css"; // puedes ignorar si no usas un CSS aparte

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const motivationalMessages = [
    "¡Genial! Vas por buen camino 🚀",
    "¡Excelente! Una menos 💪",
    "¡Eres imparable! 🔥",
    "¡Así se hace! 🙌",
    "¡Muy bien! Sigue así ⭐",
  ];

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { id: Date.now().toString(), text: task }]);
    setTask("");
  };

  const completeTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
    const msg =
      motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
    alert("🎉 ¡Tarea completada!\n" + msg);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>✨ Mis Tareas ✨</h1>

      <div style={styles.inputContainer}>
        <input
          style={styles.input}
          type="text"
          placeholder="Escribe una tarea..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button style={styles.addButton} onClick={addTask}>
          ＋
        </button>
      </div>

      {tasks.length === 0 ? (
        <p style={styles.empty}>No tienes tareas pendientes 😎</p>
      ) : (
        <ul style={styles.list}>
          {tasks.map((item) => (
            <li
              key={item.id}
              style={styles.taskItem}
              onClick={() => completeTask(item.id)}
            >
              {item.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Estilos responsivos en JS
const styles = {
  container: {
    maxWidth: "500px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f5f7fa",
    minHeight: "100vh",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  inputContainer: {
    display: "flex",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    fontSize: "16px",
    borderRadius: "12px",
    border: "1px solid #ddd",
  },
  addButton: {
    marginLeft: "10px",
    padding: "0 15px",
    fontSize: "24px",
    borderRadius: "12px",
    border: "none",
    backgroundColor: "#4a90e2",
    color: "#fff",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  taskItem: {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "12px",
    marginBottom: "10px",
    border: "1px solid #eee",
    fontSize: "18px",
    color: "#333",
    cursor: "pointer",
    transition: "0.2s",
  },
  empty: {
    textAlign: "center",
    fontSize: "16px",
    color: "#999",
    marginTop: "50px",
  },
};

// Estilos responsivos con CSS nativo (opcional)
const css = `
@media (max-width: 400px) {
  h1 {
    font-size: 22px !important;
  }
  input {
    font-size: 14px !important;
    padding: 8px !important;
  }
  li {
    font-size: 16px !important;
  }
}
`;

// Inyectamos CSS responsivo directamente en el documento
const styleSheet = document.createElement("style");
styleSheet.innerText = css;
document.head.appendChild(styleSheet);

export default App;
