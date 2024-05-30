import { Button, TextInput } from "flowbite-react";
import React from "react";
import { HiPlus } from "react-icons/hi";
import { addTaskToState } from "../../helpers/tasksHelper";
import { addTask } from "../../services/apiServices";
import styles from "../../styles/todos/addTask.module.css";
import PrioritySelect from "../common/PrioritySelect";

function AddTask({ tasks, setTasks }) {
  // console.log("user", user);

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
      dueDate: new Date(dueDate),
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
      <TextInput
        name="task"
        type="text"
        className="grow-[1] [&>div>input]:!rounded-full"
      />
      <TextInput
        name="dueDate"
        type="date"
        className="[&>div>input]:!rounded-full"
      />
      <PrioritySelect className="shrink-0 [&>div>select]:!rounded-full" />
      <Button
        pill
        type="submit"
        className="shrink-0"
        gradientDuoTone="purpleToBlue"
      >
        <HiPlus className="h-5 w-5 mr-2" /> Add Task
      </Button>
    </form>
  );
}

export default AddTask;
