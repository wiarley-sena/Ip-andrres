"use client";
import Cabecalho from "./components/Cabecalho";
import MapaDinamico from "./components/MapaDinamico";
import Info from "./components/info";
import { useState, useEffect, useCallback } from "react";

export default function Home() {
  const [dados, setDados] = useState({
    ip: "",
    regionName: "",
    timezone: "",
    isp: "",
    lat: "",
    lon: "",
  });

  const buscarIp = useCallback( async (ipParaBuscar)=> {
    try{
      const resposta = await fetch(`/api/ip?ip=${ipParaBuscar}`);
      const dados = await resposta.json();
      setDados({
        ip: dados.query,
        regionName: dados.regionName,
        timezone: dados.timezone,
        isp: dados.isp,
        lat: dados.lat,
        lon: dados.lon
      })
    }catch{
      console.error("Erro ao buscar o IP")
    }
  }, [])

  useEffect(() => {
    buscarIp("");
  }, [buscarIp]);

  return (
    <div>
      <Cabecalho onBuscar={buscarIp} />
      <Info
        ip={dados.ip}
        regionName={dados.regionName}
        timezone={dados.timezone}
        isp={dados.isp}
      />
      {dados.lat !== "" && dados.lon !== "" && (
        <MapaDinamico latitude={dados.lat} longitude={dados.lon} />
      )}
    </div>
  );
}
