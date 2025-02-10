import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { BaristaProvider } from "./context/BaristaContext";
import LoginPage from "./components/login";
import BaristaShiftForm from "./features/Baristas/BaristaShiftForm.jsx";
import BaristShiftsList from "./features/Baristas/BaristShiftsList.jsx";

function App() {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return (
    <BaristaProvider>
      <Router>
        <div className=" h-32 flex justify-end w-full ">
          <img src="../public/logo.png" alt="mon-logo" className="ml-4" />
        </div>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/home"
            element={
              isAuthenticated ? (
                <div className="container mx-auto pt-0 p-8">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-5">
                      <BaristaShiftForm />
                    </div>
                    <div className="col-span-7 print:col-span-12 ">
                      <BaristShiftsList />
                    </div>
                  </div>
                </div>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </BaristaProvider>
  );
}

export default App;
