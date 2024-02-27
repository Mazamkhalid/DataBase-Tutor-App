import React, { useState } from "react";

const SQLEditor = () => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting query: ", query);
  };
  const dummyData = [
    {
      id: 1,
      name: "John Smith",
      age: 30,
      city: "New York",
    },
    {
      id: 2,
      name: "Jane Doe",
      age: 25,
      city: "Los Angeles",
    },
    {
      id: 3,
      name: "Bob Johnson",
      age: 35,
      city: "Chicago",
    },
  ];
  return (
    <div style={{ backgroundColor: "#f8f9fa", padding: "30px" }}>
      <h1 style={{ textAlign: "center", color: "#007bff" }}>SQL Editor</h1>

      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <textarea
            value={query}
            onChange={handleChange}
            placeholder="Enter your SQL query here..."
            style={{
              width: "80%",
              height: "300px",
              padding: "12px 20px",
              boxSizing: "border-box",
              border: "2px solid #ccc",
              borderRadius: "4px",
              backgroundColor: "#f8f9fa",
              fontSize: "18px",
              resize: "none",
            }}
          />
        </div>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button
            type="submit"
            style={{
              backgroundColor: "#007bff",
              color: "white",
              padding: "12px 20px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              float: "center",
            }}
          >
            Run Query
          </button>
        </div>
      </form>
      <div style={{ display: "flex" }}>
        <div style={{ width: "30%", marginRight: "20px" }}>
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.age}</td>
                  <td>{row.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
    </div>
  );
};

export default SQLEditor;
