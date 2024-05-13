import React from "react";
import PrioritySelect from "../common/PrioritySelect";
import styles from "../../styles/todos/updateTask.module.css";
import { Button, Datepicker, TextInput } from "flowbite-react";
import { HiPencil } from "react-icons/hi";

function UpdateTaskForm({ task }) {
  return (
    <form className={styles.formContainer}>
      <TextInput
        className="[&>div>input]:rounded-full"
        type="text"
        sizing="md"
        icon={HiPencil}
        placeholder="Task"
        value={task.task}
        // addon={<HiPencil />}
        // color="success"
        // helperText={
        //   <>
        //     <span className="font-medium">Alright!</span> Username available!
        //   </>
        // }
      />
      <Datepicker value={new Date(task.date)} />
      <PrioritySelect selected={task.priority} />
      <Button pill gradientDuoTone="greenToBlue">
        Submit
      </Button>
    </form>
  );
}

export default UpdateTaskForm;
