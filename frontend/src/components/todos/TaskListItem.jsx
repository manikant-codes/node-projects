import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  removeTaskFromState,
  updateTaskInState,
} from "../../helpers/tasksHelper";
import { deleteTask, updateTask } from "../../services/apiServices";
import styles from "../../styles/todos/tasksList.module.css";
import FlowModal from "../common/FlowModal";
import PrioritySelect from "../common/PrioritySelect";
import UpdateTaskForm from "./UpdateTaskForm";
import { Button } from "flowbite-react";

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

  async function handleCheckChange(e) {
    const updatedTask = await updateTask({
      ...task,
      isCompleted: e.target.checked,
    });
    updateTaskInState(updatedTask.data, tasks, setTasks);
  }

  return (
    <>
      <li className={styles.taskListItem}>
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={handleCheckChange}
        />
        <p className={styles.task}>{task.task}</p>
        <p>{task.dueDate}</p>
        <PrioritySelect selected={task.priority} />
        <Button
          gradientDuoTone="purpleToBlue"
          onClick={handleEdit}
          pill
          size="sm"
        >
          <FontAwesomeIcon icon={faEdit} />
        </Button>
        <Button onClick={handleDelete} pill size="sm" color="failure">
          <FontAwesomeIcon className="text-white" icon={faTrash} />
        </Button>
      </li>
      {isOpen && (
        <FlowModal
          title="Update Task"
          isOpen={isOpen}
          toggleModal={toggleModal}
          body={
            <UpdateTaskForm
              task={task}
              tasks={tasks}
              setTasks={setTasks}
              toggleModal={toggleModal}
            />
          }
        />
      )}
    </>
  );
}

export default TaskListItem;
