
import AgroConquista from "../../../assets/images/agro_conquista.webp";
import Friato from "../../../assets/images/friato.png";
import Agrofava from "../../../assets/images/agrofava.png";
import Agroman from "../../../assets/images/agroman.webp";
import Olvego from "../../../assets/images/Olvego.jpg";
import BrasilVerde from "../../../assets/images/brasilVerde.jpg";
import Coapil from "../../../assets/images/coapil.png";
import Oderich from "../../../assets/images/oderich.png";
import Ipuan from "../../../assets/images/ipuan.webp";
import styles from "./styles.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

// import 'swiper/swiper-bundle.min.css'
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"


// import Swiper core and required modules
import SwiperCore, {
  Pagination,
  Navigation,
  Autoplay
} from 'swiper';
SwiperCore.use([Autoplay,Pagination,Navigation]);
export default function Clients() {

  const clients = [
    {
      name:"Friato",
      img:AgroConquista
    },
    {
      name:"Friato",
      img:Friato
    },
    {
      name:"Agrofava",
      img:Agrofava
    },
    {
      name:"Agroman",
      img:Agroman
    },
    {
      name:"Olvego",
      img:Olvego
    },
    {
      name:"Brasil Verde",
      img:BrasilVerde
    },
    {
      name:"Coapil",
      img:Coapil
    },
    {
      name:"Oderich",
      img:Oderich
    },
    {
      name:"Ipuan",
      img:Ipuan
    }
  ];


  return (
    <section className={styles.clients}>
      <div className={"container"}>
        <h2>Clientes</h2>
        
        <Swiper slidesPerView={7}
        // loop={true} loopFillGroupWithBlank={true}
        autoplay={{
          "delay": 2000,
          "disableOnInteraction": false
        }} spaceBetween={60} freeMode={true} pagination={{
              "clickable": true,
              "type":'none'
              }} navigation={true}  breakpoints={{
                  "300": {
                      "slidesPerView": 2,
                      "spaceBetween": 30
                  },
                  "400": {
                      "slidesPerView": 2,
                      "spaceBetween": 30
                  },
                  "500": {
                      "slidesPerView": 3,
                      "spaceBetween": 30
                  },
                  "640": {
                    "slidesPerView": 5,
                    "spaceBetween": 30
                  },
                  "868": {
                    "slidesPerView": 6,
                    "spaceBetween": 40
                  }}} className={styles.slide_wrap}>
                    {
                       clients.map((val,key)=>{
                         return(
                          <SwiperSlide key={key} className={styles.slide} >
                            <img src={val.img} title={val.name} className={styles[val.name]} alt={val.name}/>
                          </SwiperSlide>  
                        )
                      })
                    }      
              </Swiper>
      </div>
    </section>
  );
}
