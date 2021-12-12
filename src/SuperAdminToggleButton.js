import PropTypes from "prop-types";
import React, { Component } from "react";

import "./toggleButton.css";

export class ToggleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { selected, toggleSelected } = this.props;
    return (
      <>
        <div style={{ width: "100%", display: "flex" }}>
          <div
            className="toggle-container"
            onClick={toggleSelected}
            // style={{ width: "50%" }}
          >
            <div
              className={`dialog-button ${selected ? "" : "disabled"}`}
            ></div>
          </div>
          <p style={{ width: "50%", paddingLeft: "10px" }}>
            {selected ? "Approved" : "Pending"}
          </p>
        </div>
      </>
    );
  }
}

ToggleButton.propTypes = {
  selected: PropTypes.bool.isRequired,
  toggleSelected: PropTypes.func.isRequired,
};
