import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./home/HomePage.jsx";
import Profile from "./profile/Profile.jsx";
import Login from "./login/Login.tsx";
import ProfileRegistration from "./profile-registration/ProfileRegistration.tsx";
import Community from "./community/Community.tsx";
import NewCommunity from "./community/newCommunity/NewCommunity.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={<ProtectedRoute element={<HomePage />} />}
        />
        <Route
          path="/profile"
          element={<ProtectedRoute element={<Profile />} />}
        />
        <Route
          path="/profile/register"
          element={<ProtectedRoute element={<ProfileRegistration />} />}
        />
        <Route
          path="/community"
          element={<ProtectedRoute element={<Community />} />}
        />
        <Route
          path="/community/newCommunity"
          element={<ProtectedRoute element={<NewCommunity />} />}
        />
      </Routes>
  );
}
