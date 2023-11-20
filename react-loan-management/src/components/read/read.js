import React, { useEffect, useState } from "react";
import Nav from "../nav/nav";
import "./read.css";
import axios from "axios";

const Read = () => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/items");
      setDataList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/items/${id}`);
      console.log("item deleted");
      fetchData();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div className="read">
      <Nav />
      <div className="readContainer">
        <h1>read</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {dataList.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td>
                  <button>update</button>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Read;
