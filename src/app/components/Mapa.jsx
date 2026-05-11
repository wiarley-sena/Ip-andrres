'use client';

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useMap } from "react-leaflet";
import L from "leaflet"
import { useEffect } from "react";

const iconeLocalizacao = new L.Icon({
    iconUrl: "./images/icon-location.svg",
    iconSize: [46, 56],
    iconAnchor: [23, 56]
})
function MyComponente ({latitude, longitude}) {
    const map = useMap();
    useEffect(()=>{
        map.flyTo([latitude ,longitude])
    },[latitude, longitude, map]);
    return null;
}

export default function Mapa (props) {    

    const position = {lat: props.latitude, lng: props.longitude}

    return(
        <section className="mapa">
            <MapContainer
            center={position}
            zoom={13} 
            scrollWheelZoom={false} 
            zoomControl={false}>
            <MyComponente latitude={props.latitude} longitude={props.longitude}/>
            <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
            position={position}
            title="localização do IP pesquisado"
            icon={iconeLocalizacao}
            />
            </MapContainer>
        </section>
    )
}
