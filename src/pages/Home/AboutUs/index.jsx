import { useEffect, useRef} from "react";
import styles from "./styles.module.css";
export default function AboutUs() {
    const aboutRef = useRef(null);

    const countData = ()=>{ 
        let root = document.getElementById("root");
        let about = aboutRef?.current;
        var isColled = false;

        let years = 0;
        let services = 0;
        let clientesRate = 0;
        let prizes = 0;

        let totalPrizes = 11;
        let totalClientesRate = 96.5;
        let totalServices = 10000;
        let yearsRef = document.querySelector("."+styles.yearsRef);
        let servicesRef = document.querySelector("."+styles.servicesRef);
        let clientesRateRef = document.querySelector("."+styles.clientesRateRef);
        let prizesRef = document.querySelector("."+styles.prizesRef);

        let d = new Date();
        let totalYears = d.getFullYear() - 1988;

        let plus = "";
        let lastNumber = totalYears.toString()[totalYears.toString().length - 1];
        if(parseInt(lastNumber) !== 5 && parseInt(lastNumber) !== 0){
            plus = "+";
            if(parseInt(lastNumber) > 5){
                totalYears = totalYears - parseInt(lastNumber) + 5;
            }else{
                totalYears = totalYears - parseInt(lastNumber);
            }
        }
        
        root.addEventListener("scroll",()=>{
            if(root.scrollTop >= about.offsetTop - about.offsetHeight && !isColled){
                isColled = true;
                let yT = setInterval(()=>{
                    years++;
                    if(years >= parseInt(totalYears)){
                        clearInterval(yT)
                        years = parseInt(totalYears);
                    }
                    yearsRef.innerText = plus+years;
                },80);

                let sT = setInterval(()=>{
                    services = services + 100;

                    if(services >= parseInt(totalServices)){
                        clearInterval(sT)
                        services = parseInt(totalServices);
                    }
                    servicesRef.innerText = "+"+services.toLocaleString('pt-br', {minimumFractionDigits: 0});
                },30)

                let cT = setInterval(()=>{
                    clientesRate++;

                    if(clientesRate >= parseFloat(totalClientesRate)){
                        clearInterval(cT)
                        clientesRate = parseFloat(totalClientesRate);
                    }
                    clientesRateRef.innerText = clientesRate.toLocaleString('pt-br', {minimumFractionDigits: 1})+"%";
                },30)

                let pT = setInterval(()=>{
                    prizes++;

                    if(prizes >= parseFloat(totalPrizes)){
                        clearInterval(pT)
                        prizes = parseFloat(totalPrizes);
                    }
                    prizesRef.innerText = prizes;
                },100)
            }
        })
    }

    useEffect(()=>{
        countData();
    },[])


    return (
        <>
            <section ref={aboutRef} className={styles.about_us} >
                
                <div className={"background_red"}></div>

                <div className={"container "+styles.container}>
                    <h2>Quem somos</h2>

                    <p>A EMPEL foi fundada em 1988 com o sr. Elves Vieira de Melo na cidade de Pires do Rio no interior do estado. Logo viu na região um futuro promissor para o mercado de prestação de serviços em eletricidade. Juntamente com muita disciplina e objetividade começou a construir a estrutura física e organizacional da empresa.</p>
                    <p>Hoje com mais de 30 anos de mercado atendemos todo o Brasil, com excelência em qualidade e satisfação. Desenvolvendo soluções para nossos clientes, para uma economia e melhor qualidade de energia elétrica.</p>

                    <div className={styles.info_wrap}>
                        <div className={styles.info_single}>
                            <h1 className={styles.yearsRef}>0</h1>
                            <h3>Anos de Experiência</h3>
                        </div>

                        <div className={styles.info_single}>
                            <h1 className={styles.servicesRef}>0</h1>
                            <h3>Serviços Concretizados</h3>
                        </div>

                        <div className={styles.info_single}>
                            <h1 className={styles.clientesRateRef}>0</h1>
                            <h3>Satisfação de nossos clientes</h3>
                        </div>

                        <div className={styles.info_single}>
                            <h1 className={styles.prizesRef}>0</h1>
                            <h3>Prêmios Recebidos</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
