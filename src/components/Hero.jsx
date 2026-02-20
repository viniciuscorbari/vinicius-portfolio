import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="section hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <h1 className="hero__title">
            Desenvolvimento de sites e landing pages
            <span className="hero__accent"> que geram clientes</span>
          </h1>

          <p className="hero__subtitle">
            Eu ajudo negócios e profissionais a terem presença online
            com sites modernos, rápidos e responsivos. 
            Entrega ágil, código organizado e deploy pronto para uso.
          </p>

          <div className="hero__cta">
            <a
              className="btn btn--primary"
              href="https://wa.me/5545999907477"
              target="_blank"
              rel="noreferrer"
            >
              💬 Falar no WhatsApp
            </a>

            <a className="btn btn--ghost" href="#projetos">
              Ver projetos
            </a>
          </div>

          <div className="hero__badges">
            <span>Entrega rápida</span>
            <span>Mobile-first</span>
            <span>React & HTML/CSS</span>
            <span>Deploy incluso</span>
          </div>
        </div>

        <div className="hero__card">
          <div className="hero__cardTop">
            <div className="pill">Disponível para novos projetos</div>

            <div className="mini">
              <div className="mini__title">Prazo médio</div>
              <div className="mini__value">2–5 dias</div>
            </div>

            <div className="mini">
              <div className="mini__title">Especialidade</div>
              <div className="mini__value">Front-end</div>
            </div>
          </div>

          <div className="hero__cardBody">
            <h3>O que você recebe</h3>
            <ul>
              <li>Layout moderno e profissional</li>
              <li>Site 100% responsivo</li>
              <li>Publicação online pronta</li>
              <li>Suporte pós-entrega</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}