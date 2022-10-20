import {BiDollarCircle, BiTrendingUp, BiBullseye, BiBuildings, BiMoney} from "react-icons/bi";
import styles from "./styles.module.css";
export default function Representatives() {
 


    return (
        <>
            <section id={"representatives"} className={styles.representatives} >
                <div className={"background_red"}></div>
                    <div className={"container "+styles.container}>
                        <h2>Seja um representante na sua região!</h2>

                        <div className={styles.flex}>
                            <ul className={styles.info_wrap}>
                                <li>Remuneração agressiva <BiDollarCircle/></li>
                                <li>Treinamento em vendas <BiTrendingUp/></li>
                                <li>Atendimento personalizado <BiBullseye/></li>
                                <li>Grandes e pequenos negócios <BiBuildings/></li>
                                <li>Retorno Financeiro em curto prazo <BiMoney/></li>
                            </ul>

                            <div className={styles.services}>
                                <h1>7</h1>
                                <h3>Tipos de Serviços Oferecidos</h3>
                            </div>
                        </div>
                    </div>
            </section>
        </>
    )
}
