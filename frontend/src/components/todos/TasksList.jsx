import React from "react";
import styles from "../../styles/todos/tasksList.module.css";
import TaskListItem from "./TaskListItem";

function TasksList({ tasks, setTasks }) {
  if (!tasks) return null;

  return (
    <ul className={styles.taskList}>
      {tasks.map((task) => {
        return (
          <TaskListItem
            key={task._id}
            task={task}
            tasks={tasks}
            setTasks={setTasks}
          />
        );
      })}
    </ul>
  );
}

export default TasksList;
