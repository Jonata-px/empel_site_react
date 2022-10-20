import React from 'react'
import styles from "./styles.module.css";
import imageEngine from "../../../assets/images/engine.webp";
import imageTransformers from "../../../assets/images/transformers.webp";
import imagePainel from "../../../assets/images/painel.webp";
import imageFotov from "../../../assets/images/solar.webp";
import imageIndustry from "../../../assets/images/industry.webp";
import imageProjects from "../../../assets/images/projects.webp";
import imageRedesEletricas from "../../../assets/images/redes_eletricas.webp";

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

                    
                    <div style={{backgroundImage:"url("+imageIndustry+")"}} className={styles.service_single}>
                        <h3>Montagem Industrial</h3>

                        <article>
                            <p>A EMPEL oferece solução técnica para os serviços de montagem elétrica industrial e comercial para empresas. Os prazos são sempre os menores possíveis e conforme a necessidade do cliente característica de nossa qualidade. O resultado é um cliente cada vez mais tranquilo e certo do sucesso de seu empreendimento.</p>
                        </article>
                    </div>

                    <div style={{backgroundImage:"url("+imageProjects+")"}} className={styles.service_single}>
                        <h3>Projetos Elétricos</h3>

                        <article>
                            <ul>
                                <li>Projetos de Subestação de energia</li>
                                <li>Projetos de Cabeamento estruturado</li>
                                <li>Projeto Iluminotécnico</li>
                                <li>Projeto de distribuição de baixa tensão.</li>
                                <li>Projetos Fotovoltaico</li>
                            </ul>
                        </article>
                    </div>

                    <div style={{backgroundImage:"url("+imageRedesEletricas+")"}} className={styles.service_single}>
                        <h3>Redes Elétricas Média e Alta Tensão</h3>

                        <article>
                            <ul>
                                <li>RDR - Montagem de redes aéreas de distribuição Rural</li>
                                <li>RDU - Montagem de redes aéreas de distribuição Urbana</li>
                                <li>Construção de redes subterrâneas de distribuição de energia</li>
                                <li>Sistemas de iluminação pública</li>
                                <li>Montagem de subestações</li>
                                <li>S.P.D.A. (Sistema de Proteção Contra Descargas Atmosféricas)</li>
                                <li>Loteamentos</li>
                            </ul>
                        </article>
                    </div>

                </div>
            </div>
        </section>
    )
}
