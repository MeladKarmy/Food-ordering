import React, { useState } from "react";

export default function Input(props) {
  let [error, setError] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (props.pattern && !new RegExp(props.pattern).test(value)) {
      setError(true);
    } else {
      setError(false);
    }
    props.onChange && props.onChange(e);
  };

  return (
    <div>
      <div className="flex flex-wrap items-start justify-start justify-items-start content-start">
        <label className="mb-3 px-2">{props.label} :</label>
        <br />
        <input
          type="text"
          placeholder={props.placeholder}
          className="px-4 py-2 rounded-3xl w-full outline-red-500 border border-gray-500"
          pattern={props.pattern}
          required
          name={props.name}
          onChange={handleInputChange}
          value={props.value}
        />
        <span
          className={`text-red-600 font-semibold   ${
            error ? "inline-block" : "hidden"
          }`}
        >
          {props.error}
        </span>
      </div>
    </div>
  );
}
