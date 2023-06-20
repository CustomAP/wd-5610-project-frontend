import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Profile from "./profile";
import Register from './register'
import Home from "./home";
// import searchResults from './app/searchResultsSlice'
import Search from "./search";
import Details from "./details";
// import { configureStore } from '@reduxjs/toolkit';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search/:criteria" element={<Search/>} />
          <Route path="/details/:ID" element={<Details/>} />
        </Routes>
    </BrowserRouter>
   
  );
}

export default App;
