import { useState } from "react";

const DynamicList = ({ title, data, setData }) => {

  const handleAdd = () => {
    setData([...data, ""]);
  };

  const handleDelete = (i) => {
    const filtered = data.filter((_, index) => index !== i);
    setData(filtered);
  };

  const handleChange = (i, val) => {
    const newList = [...data];
    newList[i] = val;
    setData(newList);
  };

  return (
    <div className="card" style={{ padding: "20px" }}>
      <h4>{title}</h4>

      {data.map((val, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "12px"
          }}
        >
          <input
            type="text"
            value={val}
            placeholder={`${title} ${i + 1}`}
            onChange={(e) => handleChange(i, e.target.value)}
          />

          <button
            type="button"
            onClick={() => handleDelete(i)}
            style={{ backgroundColor: "#ff4d6d" }}
          >
            Delete
          </button>
        </div>
      ))}

      <button type="button" onClick={handleAdd}>
        Add {title}
      </button>
    </div>
  );
};

export default DynamicList;