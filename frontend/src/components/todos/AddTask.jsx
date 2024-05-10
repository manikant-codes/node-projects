import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { addTaskToState } from "../../helpers/tasksHelper";
import { addTask } from "../../services/apiServices";
import styles from "../../styles/todos/addTask.module.css";
import PrioritySelect from "../common/PrioritySelect";

function AddTask({ tasks, setTasks }) {
  async function handleSubmit(e) {
    e.preventDefault();

    const task = e.target["task"].value;
    const dueDate = e.target["dueDate"].value;
    const priority = e.target["priority"].value;

    if (!task || task.length < 2 || !dueDate) {
      alert("Please fill out all fields");
      return;
    }

    const result = await addTask({
      task,
      dueDate,
      priority,
    });

    addTaskToState(result.data, tasks, setTasks);

    setTimeout(() => {
      if (result.success === true) {
        alert("Added successfully!");
      }
    }, 100);
  }

  return (
    <form className={styles.addTaskContainer} onSubmit={handleSubmit}>
      <input name="task" type="text" className={styles.taskInput} />
      <input name="dueDate" type="date" className={styles.dateInput} />
      <PrioritySelect />
      <button type="submit">
        <FontAwesomeIcon icon={faAdd} /> Add Task
      </button>
    </form>
  );
}

export default AddTask;
