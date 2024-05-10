import React from "react";
import PrioritySelect from "../common/PrioritySelect";
import styles from "../../styles/todos/updateTask.module.css";

function UpdateTaskForm({ task }) {
  return (
    <form className={styles.formContainer}>
      <input type="text" value={task.task} />
      <input type="date" value={new Date(task.date)} />
      <PrioritySelect selected={task.priority} />
      <button>Submit</button>
    </form>
  );
}

export default UpdateTaskForm;
