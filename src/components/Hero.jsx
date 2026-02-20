import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="section hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <h1 className="hero__title">
            Front-end Developer <span className="hero__accent">para projetos rápidos</span>
          </h1>

          <p className="hero__subtitle">
            Eu crio sites e interfaces modernas, responsivas e prontas para publicar.
            Foco em landing pages, sites institucionais e dashboards.
          </p>

          <div className="hero__cta">
            <a className="btn btn--primary" href="#projetos">Ver projetos</a>
            <a className="btn btn--ghost" href="#contato">Falar comigo</a>
          </div>

          <div className="hero__badges">
            <span>React</span>
            <span>HTML/CSS</span>
            <span>UI Responsiva</span>
            <span>Deploy (Vercel)</span>
          </div>
        </div>

        <div className="hero__card">
          <div className="hero__cardTop">
            <div className="pill">Disponível para freela</div>
            <div className="mini">
              <div className="mini__title">Entrega</div>
              <div className="mini__value">Rápida</div>
            </div>
            <div className="mini">
              <div className="mini__title">Foco</div>
              <div className="mini__value">Front-end</div>
            </div>
          </div>

          <div className="hero__cardBody">
            <h3>O que eu entrego</h3>
            <ul>
              <li>Layout moderno (mobile-first)</li>
              <li>Componentes organizados</li>
              <li>Site online + domínio (opcional)</li>
              <li>SEO básico + performance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}