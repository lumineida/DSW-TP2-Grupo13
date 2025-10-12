import React from "react";
import Card from "../components/Card";
import { Outlet } from "react-router-dom";

export default function Integrantes() {

  return (
    <section style={{ padding: "20px" }}>
        <h2>Conoce a Nuestro Equipo</h2>
        <Outlet />
      
    </section>
  );
}