import React from "react";
import Hero from "../components/Hero";

export default function Inicio() {
  return <div>
    <Hero titulo="Bienvenidos a Nuestro Proyecto" descripcion="Somos el Grupo 13 de Desarrollo de Software Web. Cada integrante ha creado su página personal con su temática favorita, aplicando las mejores prácticas de desarrollo frontend." />
    <section className="presentacion">
      <h2>Trabajo Practico 2</h2>
      <p>Equipo 13 - Desarrollo de Software Web</p>
    </section>
  </div>;
}