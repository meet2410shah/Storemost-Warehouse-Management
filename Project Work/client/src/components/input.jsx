import React from "react";

const Input = ({ type, name, label, value, error, onChange }) => {
  return (
    <div className="form-group">
      <input
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        type={type}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;

export const DropInput = ({
  type,
  name,
  label,
  value,
  error,
  onChange,
  options,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        className="form-control"
        id={name}
        name={name}
        value={value}
        type={type}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};
