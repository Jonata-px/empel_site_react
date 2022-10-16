import React from 'react'
import styles from "./styles.module.css";
import imageEngine from "../../../assets/images/engine.jpg";
import imageTransformers from "../../../assets/images/transformers.jpg";
import imagePainel from "../../../assets/images/painel.jpg";
import imageFotov from "../../../assets/images/solar.jpg";

export default function Services() {
    return (
        <section className={styles.services} id={"services"}>
            <div className={"container "+styles.container}>

                <h2>Serviços</h2>

                <div className={styles.services_wrap}>

                    <div style={{backgroundImage:"url("+imageFotov+")"}} className={styles.service_single}>
                        <h3>Energia fotovoltaíca</h3>
                        <article>
                            <p>A EMPEL promove projeto e implantação de fonte renovável de energia elétrica, energia solar, conectado à rede de distribuição. Por meio da expertise dos nossos profissionais, fazemos toda a análise de viabilidade técnica e financeira, projeto, instalação, monitoramento e manutenção de geradores fotovoltaicos para empresas comerciais, industriais e residenciais.</p>
                        </article>
                    </div>

                    <div style={{backgroundImage:"url("+imageTransformers+")"}} className={styles.service_single}>
                        <h3>Transformadores</h3>
                        <article>
                            <span>Manutenção</span>
                            <p>Sua empresa não pode parar e manutenção é essencial para economia e lucratividade. Especializada em  manutenção de transformadores, a equipe da Empel tem rapidez e competência na entrega e ainda fornece um transformador provisório até a conclusão da manutenção.</p>
                            <span>Reforma</span>
                            <p>Você pode contar com a Empel em qualquer hora do dia ou da noite. Com a Central de tratamento de Óleo a termovácuo, você tem qualidade na reforma de transformadores.</p>
                        </article>
                    </div>

                    <div style={{backgroundImage:"url("+imageEngine+")"}} className={styles.service_single}>
                        <h3>Motores</h3>

                        <article>
                            <ul>
                                <li>Manutenção preventiva e corretiva (rebobinamento) em motores e geradores elétricos</li>
                                <li>Contrato de manutenção preventiva e corretiva de motores elétricos</li>
                                <span>Rejuvenescimento</span>
                                <li>Corresponde a manutenção completa do motor, com testes e ensaios elétricos, para garantir o seu funcionamento em perfeitas condições de trabalho e dentro das especificações de normas técnicas.</li>
                                <span>Processos</span>
                                <li>Manutenção mecânica</li>
                                <li>Secagem em estufa</li>
                                <li>Ensaios elétricos</li>
                                <li>Resistência de isolação</li>
                                <li>Ligação na tensão nominal com medição de corrente e rpm</li>
                                <li>Avaliação do funcionamento</li>
                                <li>Emissão de laudo técnico.</li>
                                <span>Rebobinamento</span>
                                <li>Reconstituição do enrolamento queimado com as mais modernas técnicas de bobinagem, impregnação e secagem.</li>
                            </ul>
                        </article>
                    </div>

                    <div style={{backgroundImage:"url("+imagePainel+")"}} className={styles.service_single}>
                        <h3>Painéis <abbr title="Type Tested Assembly">TTA</abbr> e <abbr title="Partially Type Tested Assembly">PTTA</abbr></h3>

                        <article>
                            <p>Utilizados em grandes instalações, os Quadros Gerais de Baixa Tensão da Empel são <span>fabricados conforme projeto elétrico,</span> tendo sempre como conduta o pleno atendimento as normas técnicas e os mais modernos critérios de Engenharia, utilizando-se <span>materiais dos melhores fornecedores,</span> como ABB, Schneider, Siemens, Eaton, WEG ou outras.</p>
                            <p>Fonecemos painéis abrigados e painéis de media tensão.</p>
                            <p>Confeccionados em Chapa de aço carbono, autoportante, nossos painéis podem ser montados para diversas potências e formas construtivas (Forma 1, Forma 2A ou 2B, Forma 3A ou 3B, ou Forma 4A ou 4B).</p>
                        </article>
                    </div>

                </div>
            </div>
        </section>
    )
}
