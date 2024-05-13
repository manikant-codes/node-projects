import React, { useState } from "react";
import styles from "../../styles/common/prioritySelect.module.css";
import { Select } from "flowbite-react";

function PrioritySelect({ selected, onChange }) {
  const [priority, setPriority] = useState(selected?.toLowerCase() || "a");

  function handleChange(e) {
    setPriority(e.target.value);
  }

  return (
    <Select
      name="priority"
      id="priority"
      className="[&>div>select]:rounded-full"
      // className={styles.prioritySelect}
      value={priority}
      onChange={handleChange}
    >
      <option value="a">A</option>
      <option value="b">B</option>
      <option value="c">C</option>
      <option value="d">D</option>
    </Select>
  );
}

export default PrioritySelect;
