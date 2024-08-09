import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Userlist from "./pages/Userlist";
import Adduser from "./pages/Adduser";
import User from "./User";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <Routes>
            <Route path="/" element={<Userlist />} />
            <Route path="/user" element={<User />} />
            <Route path="/adduser" element={<Adduser />} />{" "}
            {/* Route pour ajouter un utilisateur */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
