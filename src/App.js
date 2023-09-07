import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./home/HomePage.jsx";
import HeaderBar from "./header/HeaderBar.jsx";
import Profile from "./profile/Profile.jsx";
import ProfileRegistration from "./profile-registration/ProfileRegistration.tsx";
import Community from "./community/Community.tsx";
import NewCommunity from "./community/newCommunity/NewCommunity.tsx";
import Context from "./context/Context.tsx";

function App() {
  return (
    <>
      <Context>
        <Router>
          <HeaderBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/register" element={<ProfileRegistration />} />
            <Route path="/community" element={<Community />} />
            <Route path="/community/newCommunity" element={<NewCommunity />} />
          </Routes>
        </Router>
      </Context>
    </>
  );
}

export default App;
