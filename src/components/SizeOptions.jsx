import React from "react";
import "./sizeoptions.scss";

const SizeOptions = ({ jsonData, selectedSize, handleSizeChange }) => {
  return (
    <div className="sizeOptionsContainer">
      {jsonData &&
        jsonData.sizeOptions.map(option => (
          <label key={option.id}>
            <input
              type="radio"
              name="size"
              value={option.label}
              checked={selectedSize === option.label}
              onChange={handleSizeChange}
            />
            {option.label}
          </label>
        ))}
    </div>
  );
};

export default SizeOptions;
