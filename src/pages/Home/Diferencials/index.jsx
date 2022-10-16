import {BiDollarCircle, BiBarChartSquare, BiMedal, BiStopwatch} from "react-icons/bi";
import styles from "./styles.module.css";
export default function Diferencials() {

  return (
    <section className={styles.diferencials}>
        <div className={"container"}>
            <h2>Diferenciais</h2>

            <div className={styles.diferencials_wrap}>
                <div className={styles.item_single}>
                    <BiDollarCircle/>
                    <h3>Menores Preços</h3>
                </div>

                <div className={styles.item_single}>
                    <BiBarChartSquare/>
                    <h3>Serviços Individualizados</h3>
                </div>

                <div className={styles.item_single}>
                    <BiMedal/>
                    <h3>Profissionais Capacitados</h3>
                </div>

                <div className={styles.item_single}>
                    <BiStopwatch/>
                    <h3>Rapidez na entrega</h3>
                </div>
            </div>
            
        </div>
    </section>
  )
}
