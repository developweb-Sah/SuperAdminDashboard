import React from "react";
import { CDBSidebarHeader, CDBSidebarMenuItem } from "cdbreact";
import { NavLink } from "react-router-dom";
import img1 from "../images/Frame 8087.png";
import img2 from "../images/Frame 8088.png";
import img3 from "../images/Frame 8089.png";
import img4 from "../images/Frame 8090.png";
import img5 from "../images/Group 7484.png";
import img6 from "../images/Frame 80881.png";
import img7 from "../images/Frame 80871.png";
import img8 from "../images/Frame 80911.png";
import img9 from "../images/Frame 80901.png";
import { useState } from "react";
import "./Sidebar.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Sidebar = () => {
  const [showImage1, setShowImage1] = useState(false);
  const [showImage2, setShowImage2] = useState(false);
  const [showImage3, setShowImage3] = useState(true);
  const [showImage4, setShowImage4] = useState(true);

  return (
    <>
      <div
        style={{
          display: "initial",
          // height: "100vh",
          overflow: "scroll initial",
        }}
      >
        <div
          style={{
            textColor: "#fff",
            minWidth: "110px",
            width: "10px",
            height: "150vh",
            // backgroundColor: "#263544",
          }}
        >
          <CDBSidebarHeader
            prefix={
              <i>
                <img
                  src={img5}
                  alt="hospital"
                  onClick={() => {
                    window.location.href = "https://rah108.in/";
                  }}
                />
              </i>
            }
          ></CDBSidebarHeader>

          {/* <CDBSidebarContent className=""> */}
          {/* <CDBSidebarMenu> */}
          <NavLink exact to="/" activeClassName="">
            {["Hospital"].map((placement) => (
              <OverlayTrigger
                key={placement}
                overlay={
                  <Tooltip id={`tooltip-${placement}`}>{placement}</Tooltip>
                }
              >
                <CDBSidebarMenuItem
                  onClick={() => {
                    setShowImage1(false);
                    setShowImage2(false);
                    setShowImage3(true);
                    setShowImage4(true);
                  }}
                >
                  {showImage1 ? (
                    <img src={img7} alt="hospital" />
                  ) : (
                    <img src={img1} alt="hospital" />
                  )}
                </CDBSidebarMenuItem>
              </OverlayTrigger>
            ))}
          </NavLink>

          <NavLink exact to="/pending-wishlist" activeClassName="" className="">
            {["Wishlist"].map((placement) => (
              <OverlayTrigger
                key={placement}
                overlay={
                  <Tooltip id={`tooltip-${placement}`}>{placement}</Tooltip>
                }
              >
                <CDBSidebarMenuItem
                  onClick={() => {
                    setShowImage1(true);
                    setShowImage2(true);
                    setShowImage3(true);
                    setShowImage4(true);
                  }}
                >
                  {showImage2 ? (
                    <img src={img6} alt="wishlist" />
                  ) : (
                    <img src={img2} alt="wishlist" />
                  )}
                </CDBSidebarMenuItem>
              </OverlayTrigger>
            ))}
          </NavLink>

          <NavLink
            exact
            to="/profile"
            activeClassName=""
            // onClick={() => {
            //   window.location.href = "https://rah108.in/admin";
            // }}
          >
            {["Profile"].map((placement) => (
              <OverlayTrigger
                key={placement}
                overlay={
                  <Tooltip id={`tooltip-${placement}`}>{placement}</Tooltip>
                }
              >
                {/* <img src={img3} alt="profile" /> */}
                <CDBSidebarMenuItem
                  onClick={() => {
                    setShowImage1(true);
                    setShowImage2(false);
                    setShowImage3(false);
                    setShowImage4(true);
                  }}
                >
                  {showImage3 ? (
                    <img src={img3} alt="profile" />
                  ) : (
                    <img src={img8} alt="profile" />
                  )}
                </CDBSidebarMenuItem>
              </OverlayTrigger>
            ))}
          </NavLink>

          <NavLink exact to="/logout" activeClassName="">
            {["Logout"].map((placement) => (
              <OverlayTrigger
                key={placement}
                overlay={
                  <Tooltip id={`tooltip-${placement}`}>{placement}</Tooltip>
                }
              >
                <CDBSidebarMenuItem
                  onClick={() => {
                    setShowImage1(true);
                    setShowImage2(false);
                    setShowImage3(true);
                    setShowImage4(false);
                  }}
                >
                  {showImage4 ? (
                    <img src={img4} alt="logout" />
                  ) : (
                    <img src={img9} alt="logout" />
                  )}
                </CDBSidebarMenuItem>
              </OverlayTrigger>
            ))}
          </NavLink>
          {/* </CDBSidebarMenu> */}
          {/* </CDBSidebarContent> */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
