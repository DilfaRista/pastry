import { Routes, Route } from "react-router-dom";



import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponnent";


import Homepage from "./pages/Homepage";
import PenilaianPelanggan from "./pages/PenilaianPelanggan";
import KelebihanKami from "./pages/KelebihanKami";
import HomeHampers from "./pages/HomeHampers";
import HeroSection from "./pages/HeroSection";



function App() {
  return(
    <div>
      <NavbarComponent />
      <HeroSection/>
      <HomeHampers/>


        <Routes>
          <Route path="/" Component={Homepage}/>
          <Route path="/HomeHampers" Component={HomeHampers}/>
          <Route path="/KelebihanKami" Component={KelebihanKami}/>
          <Route path="/PenilaianPelanggan" Component={PenilaianPelanggan}/>
          <Route path="/Hero" Component={HeroSection}/>
        </Routes>

        <FooterComponent />
      </div>
  );
}

export default App
