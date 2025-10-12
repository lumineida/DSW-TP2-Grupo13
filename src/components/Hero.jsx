export default function Hero({titulo, descripcion}) {
  return (
    <section className="hero">
      <div className="hero-content">
          <h2>{titulo}</h2>
          <p>{descripcion}</p>
      </div>
    </section>
  );
}
