import { Button, Datepicker, TextInput } from "flowbite-react";
import React, { useState } from "react";
import styles from "../../styles/todos/updateTask.module.css";
import PrioritySelect from "../common/PrioritySelect";
import { updateTask } from "../../services/apiServices";
import { updateTaskInState } from "../../helpers/tasksHelper";

function UpdateTaskForm({ task, toggleModal, tasks, setTasks }) {
  const [formState, setFormState] = useState({
    task: task.task || "",
    dueDate: task.dueDate || "",
    priority: task.priority || "a",
    isCompleted: task.isCompleted || false,
  });

  function handleChange(e) {
    if (e instanceof Date) {
      setFormState({ ...formState, dueDate: e });
    } else {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const updatedTask = await updateTask({ ...formState, _id: task._id });
    updateTaskInState(updatedTask.data, tasks, setTasks);
    toggleModal();
  }

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        name="task"
        sizing="md"
        placeholder="Task"
        value={formState.task}
        className="[&>div>input]:rounded-full"
        onChange={handleChange}
      />
      <Datepicker
        value={new Date(formState.dueDate)}
        name="dueDate"
        onSelectedDateChanged={handleChange}
      />
      <PrioritySelect selected={formState.priority} onChange={handleChange} />
      <Button
        pill
        // gradientDuoTone="purpleToBlue"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
}

export default UpdateTaskForm;
