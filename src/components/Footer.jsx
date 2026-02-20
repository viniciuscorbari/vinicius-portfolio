import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {year} Vinicius Corbari</span>
        <span>Front-end • Projetos rápidos</span>
      </div>
    </footer>
  );
}