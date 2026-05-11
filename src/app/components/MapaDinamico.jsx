'use client';
import dynamic  from "next/dynamic";

const Mapa = dynamic(()=> import("./Mapa.jsx"),{
    ssr: false,
    loading: ()=> <section className="mapa" aria-label="mapa com a localização do IP"/>
})

export default function MapaDinamico (props){
    return(
         <Mapa latitude={props.latitude} longitude={props.longitude}/>
    )
}
