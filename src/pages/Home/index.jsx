import React from 'react'
import Banner from "./Banner";
import Services from "./Services";
import AboutUs from "./AboutUs";
import Diferencials from "./Diferencials";
import Clients from "./Clients";
export default function Home() {
  return (
    <div>
      <Banner/>
      <Services/>
      <AboutUs/>
      <Diferencials/>
      <Clients/>
    </div>
  )
}
