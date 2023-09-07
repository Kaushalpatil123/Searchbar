import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Style.css";

const SearchBar = () => {
  const [data, setData] = useState([]);
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.org/users").then((res) => {
      setData(res.data);
      setResult(res.data);
    });
  }, []);

  const getResult = (event) => {
    setResult(
      data.filter((f) => f.firstname.toLowerCase().includes(event.target.value))
    );
  };

  return (
    <div className="mainbody">
      <h1>Let's Search Employees</h1>
      <div className="maintable">
        <input
          type="text"
          placeholder="Serach for employee"
          onChange={getResult}
        />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {result.map((d, i) => (
              <tr key={i}>
                <th>{d.id}</th>
                <th>{d.firstname}</th>
                <th>{d.email}</th>
                <th>{d.birthDate}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchBar;
