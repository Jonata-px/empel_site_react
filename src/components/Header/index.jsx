import { Link } from "react-router-dom";
import {useEffect} from "react";
import Logo from "../../assets/images/logoempel.png";
import styles from "./styles.module.css";
import { BiPhone, BiMailSend} from "react-icons/bi";
import {FaFacebookF, FaInstagram, FaWhatsapp} from "react-icons/fa";
export default function Header() {
    var body = document.querySelector('#root');

    const autoScroll = (to)=>{
        let timer = setInterval(()=>{
            let el = document.getElementById(to); 
            console.log(el)
            if(el !== undefined){
                body.scrollTop = body.scrollTop + 1;
                body.scrollTo(0,el.offsetTop - 105);
                clearInterval(timer);
            }
        })
    }

    const menuSelector = ()=>{
        
        body.addEventListener('scroll',()=>{
            
            var alturaJanela = body.offsetHeight;
            var alturaScroll = body.scrollTop;

            let banner = document.getElementById('banner');
            let services = document.getElementById('services');
            let aboutUs = document.getElementById('about_us');
            const diference = 300;

            if(alturaScroll >= banner.offsetTop - diference && alturaScroll + alturaJanela <= banner.offsetTop + banner.offsetHeight + diference){
                selectMenu("Home");
            }else if(alturaScroll >= services.offsetTop - diference && alturaScroll + alturaJanela <= services.offsetTop + services.offsetHeight + diference){
                selectMenu("Serviços");
            }else if(alturaScroll >= aboutUs.offsetTop - diference && alturaScroll + alturaJanela <= aboutUs.offsetTop + aboutUs.offsetHeight + diference){
                selectMenu("Quem somos");
            }

        })

        body.scrollTo(0,1)
    }

    const selectMenu = (title)=>{
        let els = document.querySelectorAll("#menu_options li");
        for(let i = 0;i < els.length;i++){
            els[i].classList.remove(styles.focus);
            els[i].classList.add(styles.unfocus);
            if(els[i].children[0].title === title){
                els[i].classList.remove(styles.unfocus);
                els[i].classList.add(styles.focus);
            }
        }
    }

    useEffect(()=>{
        menuSelector();
    },[])

    return (
        <>
            <div className={styles.header_placeholder}/>
            <header className={styles.header}>
                <div className={styles.socials}>
                    <div className={"container"}>
                        <div>
                            <a href=""><BiPhone/> (64) 3461-1008</a>
                            <a href=""><BiMailSend /> atendimento@empel.com.br</a>
                        </div>
                        <div className={styles.socials_2}>
                            <a href="" className={styles.facebook + " btn"} ><FaFacebookF /></a>
                            <a href="" className={styles.instagram + " btn"}><FaInstagram /></a>
                            <a href="" className={styles.whatsapp + " btn"}><FaWhatsapp /></a>
                        </div>
                    </div>
                </div>

                <div className={styles.container +" container"}>
                    <Link to={"/"} className={styles.logo}>
                        <img src={Logo} alt={"Empel"} title="Empel" />
                    </Link>
                    <nav>
                        <ul id={"menu_options"}>
                            <li onClick={()=>autoScroll("banner")} className={styles.focus}><Link to={"/"} title={"Home"} >Home</Link></li>
                            <li><button onClick={()=>autoScroll("services")} title={"Serviços"} >Serviços</button></li>
                            <li><button onClick={()=>autoScroll("about_us")} title={"Quem somos"} >Quem somos</button></li>
                            <li><button title={"Representantes e integradores"} >Representantes e integradores</button></li>
                            <li><button title={"Contato"} >Contato</button></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}


