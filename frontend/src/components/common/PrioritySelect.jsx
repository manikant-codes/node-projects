import React, { useState } from "react";
import styles from "../../styles/common/prioritySelect.module.css";

function PrioritySelect({ selected, onChange }) {
  const [priority, setPriority] = useState(selected?.toLowerCase() || "a");

  function handleChange(e) {
    setPriority(e.target.value);
  }

  return (
    <select
      name="priority"
      id="priority"
      className={styles.prioritySelect}
      value={priority}
      onChange={handleChange}
    >
      <option value="a">A</option>
      <option value="b">B</option>
      <option value="c">C</option>
      <option value="d">D</option>
    </select>
  );
}

export default PrioritySelect;
