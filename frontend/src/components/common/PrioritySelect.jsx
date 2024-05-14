import { Select } from "flowbite-react";
import React, { useEffect, useState } from "react";

function PrioritySelect({ selected, onChange, ...others }) {
  const [priority, setPriority] = useState("a");

  useEffect(() => {
    setPriority(selected?.toLowerCase() || "a");
  }, [selected]);

  function handleChange(e) {
    setPriority(e.target.value);
    if (onChange) {
      onChange(e);
    }
  }

  return (
    <Select
      name="priority"
      id="priority"
      className={`[&>div>select]:rounded-full ${others.className}`}
      value={priority}
      onChange={handleChange}
      {...others}
    >
      <option value="a">A</option>
      <option value="b">B</option>
      <option value="c">C</option>
      <option value="d">D</option>
    </Select>
  );
}

export default PrioritySelect;
