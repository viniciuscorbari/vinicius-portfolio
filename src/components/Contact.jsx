import "./Contact.css";

export default function Contact() {
  const email = "viniciuscorbari35@gmail.com";
  const whatsapp = "https://wa.me/5545999907477"; // troque aqui
  const linkedin = "https://www.linkedin.com/in/vinicius-corbari-6471193a5/"; // troque aqui

  return (
    <section id="contato" className="section">
      <div className="container contact">
        <div className="contact__box">
          <h2>Contato</h2>
          <p>
            Quer um site/landing page rápida e bem feita? Me chama e a gente fecha.
          </p>

          <div className="contact__actions">
            <a className="btn2" href={whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a className="btn2" href={`mailto:${email}`}>
              Email
            </a>
            <a className="btn2" href={linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>

          <p className="contact__note">
            Respondo rápido e posso entregar em poucos dias dependendo do projeto.
          </p>
        </div>
      </div>
    </section>
  );
}