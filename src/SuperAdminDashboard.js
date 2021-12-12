import React from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import "./App.css";

function Main() {
  const [items, setItems] = useState([]);

  axios
    .get("https://project-rah.herokuapp.com/api/hospital/all")

    .then(function (response) {
      // handle success
      console.log(response.data.hospital);
      setItems(response.data.hospital);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

  // const removeTodo = (index) => {
  //   const newTodos = [...items];
  //   newTodos.splice(index, 1);
  //   setItems(newTodos);
  // };
  const deleteContact = () => {
    axios
      .delete(
        "https://project-rah.herokuapp.com/api/hospital/delete/<:hospital_id>"
      )
      .then((res) => {
        const items = res.data;
        setItems({ items });
      });
  };

  return (
    <>
      <div className="main_box p-2 m-2 main_box_border">
        <p>
          Hospitals <span> 78 hospitals</span>
        </p>
        <div className="main_button">
          <div className="main_button_start">
            <Button variant="outline-secondary">View all</Button>
            <Button variant="outline-secondary">Active</Button>
            <Button variant="outline-secondary">Archived</Button>
          </div>
          <div className="main_button_end">
            <InputGroup className="mb-3 main_button_search">
              <FormControl aria-label="Search" placeholder="Search" />
            </InputGroup>

            <Button
              variant="success"
              className="ml-2 main_button_Archive"
              style={{ height: "38px" }}
            >
              <i className="fas fa-archive"></i>Archive
            </Button>
          </div>
        </div>
        <Table responsive>
          <thead>
            <tr>
              <th>Hospital Name</th>
              <th>Hospital Type</th>
              <th>Contact</th>
              <th>Data Modified</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.hospital_name}</td>
                <td>{item.hospital_type}</td>
                <td>{item.contact_number}</td>
                <td>{item.createdAt}</td>
                <td>
                  <button type="button" className="btn" onClick={deleteContact}>
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </td>
                <td>
                  <i className="fas fa-pencil-alt px-2"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Main;
