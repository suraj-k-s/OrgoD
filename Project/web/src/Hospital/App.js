import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro"; 
import "./App.css";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Hospital from "./components/HospitalRequest/Hospital";
import HospitalR from "./components/HospitalReceive/HospitalR";
import Matching from "./components/Matching/Matching";
function App() {
  return (
    <div
      className="App"
    >
      <Navbar />
        <Routes>
          <Route path="/"  element={<Intro />} />
          <Route path="/Donate"  element={<Hospital/>} />
          <Route path="/Receive"  element={<HospitalR/>} />
          <Route path="/Matching"  element={<Matching/>} />
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
