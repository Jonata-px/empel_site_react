
import styles from "./styles.module.css";
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import iconMarker from 'leaflet/dist/images/marker-icon.png'
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
export default function Representatives() {
    const coordinates = [-17.316198038945327, -48.27525716082887];

    const icon = L.icon({ 
        iconRetinaUrl:iconRetina, 
        iconUrl: iconMarker, 
        shadowUrl: iconShadow ,
        iconSize:     [25, 41],
        shadowSize:   [30, 65],
        iconAnchor:   [10, 35],
        shadowAnchor: [7, 65]
    });

    return (
        <>
            <section className={styles.maps} >
                <div className={"container "+styles.container}>
                    <div className={styles.map_wrap}>
                        <MapContainer className={styles.map_wrap} center={coordinates} zoom={14} scrollWheelZoom={false}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={coordinates} icon={icon} >
                                <Popup>
                                    EMPEL Engenharia
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>

                    <small>Para trabalhar conosco, por favor envie seu currículo e informação para: <a href="mailto:atendimento@empel.com.br"> atendimento@empel.com.br</a></small>
                </div>
            </section>
        </>
    )
}
