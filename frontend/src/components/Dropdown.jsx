import React from 'react';

const Dropdown = ({ label, options, value, onChange }) => (
  <div style={{ margin: '10px 0' }}>
    <label>{label}</label>
    <select 
    value={value} 
    onChange={(e) => 
      {
      onChange(e.target.value)}
     }
      required>
      <option value="">-- Select --</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default Dropdown;
