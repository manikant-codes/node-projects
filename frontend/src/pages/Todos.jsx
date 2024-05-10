import React, { useEffect, useState } from "react";
import AddTask from "../components/todos/AddTask";
import TasksList from "../components/todos/TasksList";
import styles from "../styles/todos/todos.module.css";
import { getAllTasks } from "../services/apiServices";
import Modal from "../components/common/Modal";

function Todos() {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    getAllTasks().then((data) => {
      setTasks(data.data);
    });
  }, []);

  return (
    <div className={styles.containerMain}>
      <AddTask tasks={tasks} setTasks={setTasks} />
      <TasksList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default Todos;
