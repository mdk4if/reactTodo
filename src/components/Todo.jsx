import { useState, useEffect } from "react";

const Todo = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((prev) => [...prev, newTask]);
      setNewTask("");
    }
  };
  const delTask = (index) => {
    const filteredTask = tasks.filter(
      (task, filteredIndex) => filteredIndex !== index,
    );
    setTasks(filteredTask);
    localStorage.setItem("tasks", JSON.stringify(filteredTask));
  };

  const editTask = (index) => {
    const taskToEdit = tasks[index];
    delTask(index);
    setNewTask(taskToEdit);
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];

      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];

      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };
  return (
    <div className="todoList">
      <h1>TODO List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="addBtn" onClick={addTask}>
          ADD
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="editBtn" onClick={() => editTask(index)}>
              EDIT
              </button>
            <button className="delBtn" onClick={() => delTask(index)}>
              DELETE
            </button>
            <button className="upBtn" onClick={() => moveTaskUp(index)}>
              MOVE UP
            </button>
            <button className="downBtn" onClick={() => moveTaskDown(index)}>
              MOVE DOWN
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Todo;
