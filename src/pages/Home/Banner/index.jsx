import {useState, useRef, useEffect} from 'react'
import styles from "./styles.module.css";
import Image1 from "../../../assets/images/banner_1.webp";
import Image2 from "../../../assets/images/banner_2.webp";
import Image3 from "../../../assets/images/banner_4.webp";
import {BiChevronLeft, BiChevronRight} from "react-icons/bi";
export default function Banner() {

  const backgroundRef = useRef(null);
  const textRef = useRef(null);
  const textLeftRef = useRef(null);
  const textRightRef = useRef(null);
  const [toRight, setToRight] = useState(false);

  const [I, setI] = useState(0);

  const renderBackground = ()=>{
    
    let i = I;
    
    var timeout = setTimeout(()=>{
      i++;
      if(i > sliderOption.length - 1)
        i = 0;

      setI(i)
    },15000);

    let btnLeft = document.querySelector("."+styles.toLeft);
    let btnRight = document.querySelector("."+styles.toRight);

    btnLeft.onclick = ()=>goLeft(timeout);
    btnRight.onclick = ()=>goRight(timeout);
    
    
  }

  const goLeft = (timeout)=>{
    clearTimeout(timeout);
    setToRight(true);
    let i = I;
    i = i === 0 ? sliderOption.length - 1 : i-1;
    setI(i)
  }

  const goRight = (timeout)=>{
    clearTimeout(timeout);
    let i = I;
    i = i === sliderOption.length - 1 ? 0 : i + 1;
    setI(i)
  }


  const autoScroll = (to)=>{
    var body = document.querySelector('#root');
    let timer = setInterval(()=>{
        let el = document.getElementById(to); 
        if(el !== undefined){
            body.scrollTop = body.scrollTop + 1;
            body.scrollTo(0,el.offsetTop - 105);
            clearInterval(timer);
        }
    })
}

  var sliderOption = [
    {
      image:Image2,
      h1:`<h1>Nossa visão</h1>`,
      p:`<p><span>Ser empresa</span> de referência no mercado de engenharia elétrica, reconhecida como a melhor opção por clientes, colaboradores, comunidade, fornecedores e investidores, devido à qualidade de nossos produtos, serviços e relacionamento.</p>`
    },
    {
      image:Image1,
      h1:`<h1>Desde 1989</h1>`,
      p:`<p><span>Nossa</span> missão é o desenvolvimento de produtos e serviços, orientados para os consumidores e visando contribuir para otimização de sistemas elétricos, com o objetivo de elaborar soluções viáveis, com qualidade e confiabilidade dos nossos serviços, valorizando práticas de responsabilidade social para a concretização dos objetivos.</p>`
    },
    {
      image:Image3,
      h1:`<h1>Nossos Valores</h1>`,
      p:`<ul>
      <li><span>integridade,</span> porque agir com integridade é vital para construir e manter a confiança e os bons relacionamentos.</li>
      <li><span>Respeito,</span>  porque aquilo que fazemos tem um impacto na vida de muitas pessoas.</li>
      <li><span>Coragem,</span>  porque questões éticas são raramente fáceis, mas devem ser tratadas com seriedade.</li>
      <li><span>Transparência,</span>  porque devemos sempre ser verdadeiros, sinceros e capazes de justificar as nossas ações e decisões.</li>

      </ul>`
    }
  ]

  const styleToLeft = (el,elCenter,elRight)=>{
    el.classList.remove(styles.slide_left);
    el.classList.remove(styles.slide_right);
    el.classList.add(styles.slide_center);
    elCenter.classList.remove(styles.slide_left);
    elCenter.classList.remove(styles.slide_center);
    elCenter.classList.add(styles.slide_right);
    elRight.classList.remove(styles.slide_center);
    elRight.classList.remove(styles.slide_right);
    elRight.classList.add(styles.slide_left);
  }

  const styleToRight = (el,elCenter, elLeft)=>{
    el.classList.remove(styles.slide_left);
    el.classList.remove(styles.slide_right);
    el.classList.add(styles.slide_center);
    elCenter.classList.remove(styles.slide_left);
    elCenter.classList.remove(styles.slide_center);
    elCenter.classList.add(styles.slide_left);
    elLeft.classList.remove(styles.slide_center);
    elLeft.classList.remove(styles.slide_left);
    elLeft.classList.add(styles.slide_right);
  }

  const slider = (i)=>{

    let l = i-1 < 0 ? sliderOption.length - 1 : i-1;
    let r = i+1 > sliderOption.length - 1 ? 0 : i+1;

    let el = backgroundRef.current;
    let elText = document.querySelector("."+styles.slide_center);
    let elTextLeft = document.querySelector("."+styles.slide_left);
    let elTextRight = document.querySelector("."+styles.slide_right);

    if(!toRight)
      styleToRight(elTextRight, elText, elTextLeft)
    else
      styleToLeft(elTextLeft, elText, elTextRight)

    setToRight(false);

    elText = document.querySelector("."+styles.slide_center);
    elTextLeft = document.querySelector("."+styles.slide_left);
    elTextRight = document.querySelector("."+styles.slide_right);

    //ESQUERDA
    el.style.backgroundImage = `url(${sliderOption[l].image})`;
    elTextLeft.children[0].innerHTML = sliderOption[l].h1;
    elTextLeft.children[1].innerHTML = sliderOption[l].p;

    //CENTRO
    el.style.backgroundImage = `url(${sliderOption[i].image})`;
    elText.children[0].innerHTML = sliderOption[i].h1;
    elText.children[1].innerHTML = sliderOption[i].p;

    //DIREITA
    el.style.backgroundImage = `url(${sliderOption[r].image})`;
    elTextRight.children[0].innerHTML = sliderOption[r].h1;
    elTextRight.children[1].innerHTML = sliderOption[r].p;
  }

  useEffect(()=>{
    // console.log("aqui")
    renderBackground();
    slider(I);
  },[I])


  return (
    <section className={styles.banner} id={"banner"}>
      <div ref={backgroundRef} className={styles.background} />
      <button className={styles.toLeft}><BiChevronLeft/></button>
      <button className={styles.toRight}><BiChevronRight/></button>
      <div ref={textLeftRef} className={styles.container+" container "+styles.slide_left} ><div></div><div></div></div>
      <div ref={textRef} className={styles.container+" container "+styles.slide_center} ><div></div><div></div></div>
      <div ref={textRightRef} className={styles.container+" container "+styles.slide_right} ><div></div><div></div></div>

      <div className={"container "+styles.container_btn}>
        <button onClick={()=>autoScroll("contact")} className={"btn "+styles.btn}>Saiba mais</button>
      </div>
    </section>
  )
}
