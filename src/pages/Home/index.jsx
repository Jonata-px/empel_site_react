import React from 'react'
import Banner from "./Banner";
import Services from "./Services";
import AboutUs from "./AboutUs";
import Diferencials from "./Diferencials";
import Clients from "./Clients";
import Representatives from "./Representatives";
import Contact from "./Contact";
import Map from "./Map";
export default function Home() {
  return (
    <div>
      <Banner/>
      <Services/>
      <div id={"about_us"} >
        <AboutUs/>
        <Diferencials/>
        <Clients/>
      </div>
      <Representatives/>
      <Contact/>
      <Map/>
    </div>
  )
}
