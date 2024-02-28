import { Route, Routes } from "react-router-dom";
import AboutPage from "./components/Routing/AboutPage";
import HomePage from "./components/Routing/HomePage";
import Navbar from "./components/Routing/Navbar";
import ContactUs from "./components/Routing/ContactUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
