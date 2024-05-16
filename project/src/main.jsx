import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomeNote from "./components/WelcomeNote";
import TimeTO from "./components/TimeTO";
import TimeLO from "./components/TimeLO";
import TimeNY from "./components/TimeNY";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeNote />}>
          <Route path="TimeNY" element={<TimeNY />} />
          <Route path="TimeLO" element={<TimeLO/>} />
          <Route path="TimeTO" element= {< TimeTO/>} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
