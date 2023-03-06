import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { DarkModeContext } from "./context/darkModeContext";
import Hospital from "./pages/Hospitals/Hospitals";
import User from "./pages/Users/User";


function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
  <DarkModeContextProvider>
    <div className={darkMode ? "app dark" : "app"}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Hospital" element={<Hospital />} />
            <Route path="/Users" element={<User />} />
        </Routes>
    </div>
  </DarkModeContextProvider>
  );
}

export default App;
