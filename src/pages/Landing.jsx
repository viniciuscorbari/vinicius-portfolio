import "./Landing.css";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="lp">
      <header className="lp__top">
        <div className="container lp__nav">
          <div className="lp__brand">
            <span className="lp__dot" />
            PulseWeb
          </div>
          <div className="lp__navLinks">
            <a href="#beneficios">Benefícios</a>
            <a href="#planos">Planos</a>
            <a href="#faq">FAQ</a>
            <Link className="lp__back" to="/">Voltar</Link>
          </div>
        </div>
      </header>

      <main className="container lp__main">
        <section className="lp__hero">
          <div className="lp__heroText">
            <h1>
              Landing Page moderna que <span>converte clientes</span>
            </h1>
            <p>
              Eu crio páginas rápidas, responsivas e com visual profissional —
              prontas para anunciar no Instagram/Google e captar leads.
            </p>

            <div className="lp__cta">
              <a className="lp__btn lp__btn--primary" href="#planos">Ver planos</a>
              <a className="lp__btn" href="#beneficios">Como funciona</a>
            </div>

            <div className="lp__badges">
              <span>Entrega rápida</span>
              <span>Mobile-first</span>
              <span>SEO básico</span>
              <span>Deploy (Vercel)</span>
            </div>
          </div>

          <div className="lp__heroCard">
            <div className="lp__metric">
              <div className="lp__metricTitle">Tempo médio</div>
              <div className="lp__metricValue">2–5 dias</div>
            </div>
            <div className="lp__metric">
              <div className="lp__metricTitle">Formato</div>
              <div className="lp__metricValue">1 página</div>
            </div>
            <div className="lp__metric">
              <div className="lp__metricTitle">Objetivo</div>
              <div className="lp__metricValue">Conversão</div>
            </div>

            <div className="lp__cardNote">
              Ideal para: serviços, negócios locais, lançamentos e captação de leads.
            </div>
          </div>
        </section>

        <section id="beneficios" className="lp__section">
          <h2>Benefícios</h2>
          <p className="lp__muted">O que uma landing page bem feita entrega para o cliente.</p>

          <div className="lp__grid3">
            <div className="lp__box">
              <h3>Visual profissional</h3>
              <p>Design limpo, moderno e alinhado com a marca.</p>
            </div>
            <div className="lp__box">
              <h3>Conversão</h3>
              <p>CTA bem posicionado e leitura rápida para gerar ação.</p>
            </div>
            <div className="lp__box">
              <h3>Responsivo</h3>
              <p>Funciona perfeito no celular — onde está a maioria dos acessos.</p>
            </div>
          </div>
        </section>

        <section id="planos" className="lp__section">
          <h2>Planos</h2>
          <p className="lp__muted">Exemplo de precificação (você ajusta depois).</p>

          <div className="lp__grid3">
            <div className="lp__price">
              <div className="lp__priceName">Starter</div>
              <div className="lp__priceValue">R$ 499</div>
              <ul>
                <li>1 página</li>
                <li>Seções: sobre/serviços/contato</li>
                <li>Responsivo</li>
              </ul>
              <a className="lp__btn lp__btn--primary" href="#faq">Quero esse</a>
            </div>

            <div className="lp__price lp__price--featured">
              <div className="lp__priceName">Pro</div>
              <div className="lp__priceValue">R$ 899</div>
              <ul>
                <li>1 página completa</li>
                <li>Depoimentos + FAQ</li>
                <li>SEO básico</li>
              </ul>
              <a className="lp__btn lp__btn--primary" href="#faq">Quero esse</a>
            </div>

            <div className="lp__price">
              <div className="lp__priceName">Plus</div>
              <div className="lp__priceValue">R$ 1299</div>
              <ul>
                <li>1 página premium</li>
                <li>Copy e ajustes finos</li>
                <li>Otimização performance</li>
              </ul>
              <a className="lp__btn lp__btn--primary" href="#faq">Quero esse</a>
            </div>
          </div>
        </section>

        <section id="faq" className="lp__section">
          <h2>FAQ</h2>
          <div className="lp__faq">
            <details>
              <summary>Quanto tempo demora?</summary>
              <p>Normalmente de 2 a 5 dias, dependendo do conteúdo e revisões.</p>
            </details>
            <details>
              <summary>Você coloca no ar?</summary>
              <p>Sim, faço o deploy e entrego o link pronto (domínio é opcional).</p>
            </details>
            <details>
              <summary>Posso pedir alterações?</summary>
              <p>Sim, combinamos um pacote de revisões no fechamento.</p>
            </details>
          </div>

          <div className="lp__footer">
            <Link className="lp__btn" to="/">Voltar ao portfólio</Link>
          </div>
        </section>
      </main>
    </div>
  );
}