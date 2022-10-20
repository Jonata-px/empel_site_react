import {useState} from 'react'
import styles from "./styles.module.css";
import InputText from "./InputText";
import InputMask from "./InputMask";
import { BiPhone, BiMailSend, BiMap} from "react-icons/bi";
import {FaFacebookF, FaInstagram, FaWhatsapp} from "react-icons/fa";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    return (
        <section id={"contact"} className={styles.contact}>
            <div className="container">
                <h2>Entre em contato</h2>
                <div className={styles.flex}>
                    <div className={styles.box}>
                        <ul>
                            <h3>Matriz</h3>
                            <li><a target="_blank" href="https://www.google.com/maps/place/EMPEL+Engenharia+e+Consultoria+e+Eletricidade/@-17.3164695,-48.2774244,17z/data=!4m12!1m6!3m5!1s0x94a763016bd26b75:0x8280b4e048ad0e82!2sEMPEL+Engenharia+e+Consultoria+e+Eletricidade!8m2!3d-17.3164746!4d-48.2752357!3m4!1s0x94a763016bd26b75:0x8280b4e048ad0e82!8m2!3d-17.3164746!4d-48.2752357?hl=pt"><BiMap/> Rua Adolfo de Paula Silveira, Qd. 04, Lt 08,<br/> Jardim Goiás II<br/>
                            Pires do Rio, Goiás 75200-000</a></li>

                            <li><a href="mailto:atendimento@empel.com.br"><BiMailSend /> atendimento@empel.com.br</a></li>
                            <li><a href="tel:+556434611008"><BiPhone/> (64) 3461-1008</a></li>

                            <h3>Siga-nos</h3>
                            <ul className={styles.socials}>
                                
                                <li><a target="_blank" href="https://web.facebook.com/empelmateriaiseletricos"><FaFacebookF /></a></li>
                                <li><a target="_blank" href="https://www.instagram.com/empeleletrica/"><FaInstagram /></a></li>
                                <li><a target="_blank" href="https://api.whatsapp.com/send?phone=556434611008&amp;text="><FaWhatsapp /></a></li>
                            </ul>
                        </ul>
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <InputText 
                            label="Nome *"
                            value={name}
                            setValue={setName}
                            required={true}
                        />

                        <InputText 
                            label="E-mail *"
                            value={email}
                            setValue={setEmail}
                            required={true}
                            type="email"
                        />

                        <InputMask 
                            label="Telefone *"
                            value={phone}
                            setValue={setPhone}
                            required={true}
                            type="tel"
                        />

                        <InputText
                            label="Assunto"
                            value={subject}
                            setValue={setSubject}
                        />
                        <div className={styles.textarea_wrap}>
                            
                            <textarea value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                            <label>Mensagem</label>
                        </div>

                        <button disabled={false} className={"btn"}>Enviar</button>
                    </form>

                </div>
            </div>
        </section>
    )
}
