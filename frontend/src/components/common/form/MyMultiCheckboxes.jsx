import { Checkbox, Label } from "flowbite-react";
import React from "react";

function MyMultiCheckboxes({ label, options, onChange }) {
  return (
    <div>
      <p className="text-sm font-semibold mb-1">{label}</p>
      <div className="flex flex-wrap gap-4">
        {options.map((item, index) => {
          return (
            <div key={index} className="flex items-center gap-1">
              <Checkbox
                id={item.name}
                name={item.name}
                checked={item.checked}
                onChange={(e) => {
                  onChange(e, label.toLowerCase());
                }}
              />
              <Label htmlFor={item.name}>{item.name}</Label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyMultiCheckboxes;
