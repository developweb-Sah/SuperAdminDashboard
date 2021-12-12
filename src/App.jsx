import "./App.css";
import Sidebar from "./SuperAdminSidebar/Sidebar.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Heading from "./Heading/Heading";
import SuperAdminDashboard from "./Dashboard/SuperAdminDashboard";
import PendingWishlist from "./PendingWishlist/SuperAdminPendingWishlist";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="head">
          <div
            style={{
              width: "100%",
              height: "12%",
              boxShadow: "1px 1px 1px 1px #d0d5dd",
              marginLeft: "1%",
            }}
          >
            <Heading />
            <br></br>

            <div>
              <Routes>
                <Route exact path="/" element={<SuperAdminDashboard />} />
                <Route path="/pending-wishlist" element={<PendingWishlist />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
