import React, { useState } from "react";
import styles from "../../styles/todos/tasksList.module.css";
import PrioritySelect from "../common/PrioritySelect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { deleteTask } from "../../services/apiServices";
import { removeTaskFromState } from "../../helpers/tasksHelper";
import Modal from "../common/Modal";
import UpdateTaskForm from "./UpdateTaskForm";

function TaskListItem({ task, tasks, setTasks }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  function handleDelete() {
    deleteTask(task._id);
    removeTaskFromState(task._id, tasks, setTasks);
  }

  function handleEdit() {
    toggleModal();
  }

  return (
    <>
      <li className={styles.taskListItem}>
        <input type="checkbox" />
        <p className={styles.task}>{task.task}</p>
        <p>{task.dueDate}</p>
        <PrioritySelect selected={task.priority} />
        <button
          className={`${styles.actionBtn} ${styles.actionEdit}`}
          onClick={handleEdit}
        >
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button
          className={`${styles.actionBtn} ${styles.actionDelete}`}
          onClick={handleDelete}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </li>
      {isOpen && (
        <Modal
          title="Update Task"
          toggleModal={toggleModal}
          content={<UpdateTaskForm task={task} />}
        />
      )}
    </>
  );
}

export default TaskListItem;
