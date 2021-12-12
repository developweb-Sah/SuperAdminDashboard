import React from "react";
import { Button } from "react-bootstrap";

function Heading() {
  return (
    <>
      <div
        style={{ display: "flex", width: "100%", height: "90%" }}
        className="pt-3"
      >
        <div style={{ width: "85%" }} className="pl-3">
          <h5> Super Admin Dashboard</h5>
        </div>
        <div style={{ width: "15%" }}>
          <Button variant="outline-secondary">
            <i class="fas fa-phone-volume"></i>Contact Support
          </Button>
        </div>
      </div>
    </>
  );
}

export default Heading;
