import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro"; 
import "./App.css";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import User from "./components/User/User";
import Hospital from "./components/Hospital/Hospital";
import Login from "./components/Login/Login";
function App() {
  return (
    <div
      className="App"
    >
      <Navbar />
        <Routes>
          <Route path="/"  element={<Intro />} />
          <Route path="/HospitalRegistration" element={<Hospital />} />
          <Route path="/UserRegistration" index element={<User />} />
          <Route path="/Login" index element={<Login />} />
        </Routes>
      <Footer />

      {/* <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact /> */}

    </div>
  );
}

export default App;
