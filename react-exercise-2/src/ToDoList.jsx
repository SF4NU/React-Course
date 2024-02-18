import React, { useState } from "react";

function ToDoList() {
  const [task, setTask] = useState([]);

  function handleAddTask() {
    const newTask = document.getElementById("taskInput").value;
    document.getElementById("taskInput").value = "";
    if (newTask.trim() !== "") {
      setTask((t) => [...task, newTask]);
    }
  }

  function handleDeleteTask(index) {
    setTask(task.filter((_, i) => i !== index));
  }

  function handleMove(fromIndex, toIndex) {
    const newTask = [...task];
    const taskToMove = newTask.splice(fromIndex, 1)[0];
    newTask.splice(toIndex, 0, taskToMove);
    setTask((t) => newTask);
  }

  /*function moveUp(index) {
    if (index > 0) {
      const updatedTasks = [...task];
      [updatedTasks[index], updatedTasks[index - 1]] = 
      updatedTasks[[index-1], updatedTasks[index]];
      setTask(updatedTasks);
    }
  }*/

  /*function moveDown(index) {
    if (index < task.length - 1) {
      const updatedTasks = [...task];
      [updatedTasks[index], updatedTasks[index + 1]] = 
      updatedTasks[[index + 1], updatedTasks[index]];
      setTask(updatedTasks);
    }
  }*/
  
  return (
    <div className="todo-container" id="todo-container">
      <h1>To-Do-List</h1>
      <div className="input-button">
        <input id="taskInput" type="text" placeholder="Enter a task..." />
        <button className="add-button" onClick={handleAddTask}>
          Add
        </button>
      </div>
      <div className="new-div">
        {task.map((task, index) => (
          <div className="new-task-div" key={Math.random()}>
            <div className="task-div">{task}</div>
            <div className="buttons-div">
              <button
                className="delete"
                key={index}
                onClick={() => handleDeleteTask(index)}>
                Delete
              </button>
              <button
                key={index}
                onClick={() => {
                  if (index - 1 >= 0) {
                    handleMove(index, index - 1);
                  }
                }}>
                <img
                  className="up-img"
                  src="src/assets/swipe-up.png"
                  alt="move-up-image"
                />
              </button>
              <button key={index} onClick={() => handleMove(index, index + 1)}>
                <img
                  className="down-img"
                  src="src/assets/hand.png"
                  alt="move-down-image"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
