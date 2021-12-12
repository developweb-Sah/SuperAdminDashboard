import React from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import { ToggleButton } from "../Dashboard/SuperAdminToggleButton";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import "../App.css";

function PendingWishlist() {
  const [items, setItems] = useState([]);
  const [toggle, settoggle] = useState(false);

  axios
    .get("https://project-rah.herokuapp.com/api/hospital/all")

    .then(function (response) {
      console.log(response.data.hospital);
      setItems(response.data.hospital);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {});
  //  <:hospital_id

  const deleteContact = (id) => {
    axios
      .delete(`https://project-rah.herokuapp.com/api/hospital/delete/${id}`)
      .then((res) => {
        const items = res.data;
        setItems({ items });
      });
  };

  return (
    <>
      <div className="main_box p-2 m-2 main_box_border">
        <p>
          <span> Pending Waitlist</span>
        </p>

        <div className="main_button_end">
          <InputGroup className="mb-3 main_button_search">
            <FormControl aria-label="Search" placeholder="Search" />
          </InputGroup>

          <Button variant="success" className="ml-2">
            <i className="fas fa-archive"></i>Archive
          </Button>
        </div>

        <div className="pt-4" style={{ width: "100%" }}>
          <Table responsive>
            <thead>
              <tr>
                <th>Hospital Name</th>
                <th>Hospital Type</th>
                <th>Contact</th>
                <th>Data Posted</th>
                <th>Approval</th>
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
                    <ToggleButton
                      selected={toggle}
                      toggleSelected={() => {
                        settoggle(!toggle);
                      }}
                    />
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn"
                      onClick={() => deleteContact(item?._id)}
                    >
                      <i class="fas fa-trash-alt"></i>
                      <br></br>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default PendingWishlist;
