import "./Dashboard.css";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";

const initialSteps = [
  { id: 1, title: "Instalação da máquina", status: "Pendente", obs: "Aguardando peças", atraso: "" },
  { id: 2, title: "Fixação dos trilhos", status: "Feito", obs: "OK", atraso: "" },
  { id: 3, title: "Ligação elétrica", status: "Bloqueado", obs: "Sem acesso ao quadro", atraso: "Cliente não liberou área" },
  { id: 4, title: "Ajuste portas", status: "Pendente", obs: "", atraso: "" },
];

const statusColor = (status) => {
  if (status === "Feito") return "s--done";
  if (status === "Pendente") return "s--pending";
  return "s--blocked";
};

export default function Dashboard() {
  const [steps, setSteps] = useState(initialSteps);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("Todos");

  const filtered = useMemo(() => {
    return steps.filter((s) => {
      const matchesText = s.title.toLowerCase().includes(query.toLowerCase());
      const matchesFilter = filter === "Todos" ? true : s.status === filter;
      return matchesText && matchesFilter;
    });
  }, [steps, query, filter]);

  const counts = useMemo(() => {
    const total = steps.length;
    const done = steps.filter((s) => s.status === "Feito").length;
    const pending = steps.filter((s) => s.status === "Pendente").length;
    const blocked = steps.filter((s) => s.status === "Bloqueado").length;
    return { total, done, pending, blocked };
  }, [steps]);

  function toggleStatus(id) {
    setSteps((prev) =>
      prev.map((s) => {
        if (s.id !== id) return s;
        const next =
          s.status === "Pendente" ? "Feito" : s.status === "Feito" ? "Bloqueado" : "Pendente";
        return { ...s, status: next };
      })
    );
  }

  return (
    <div className="db">
      <header className="db__top">
        <div className="container db__nav">
          <div className="db__title">
            Dashboard <span>• Controle de Etapas</span>
          </div>
          <Link className="db__back" to="/">Voltar</Link>
        </div>
      </header>

      <main className="container db__main">
        <section className="db__stats">
          <div className="stat">
            <div className="stat__label">Total</div>
            <div className="stat__value">{counts.total}</div>
          </div>
          <div className="stat">
            <div className="stat__label">Feito</div>
            <div className="stat__value">{counts.done}</div>
          </div>
          <div className="stat">
            <div className="stat__label">Pendente</div>
            <div className="stat__value">{counts.pending}</div>
          </div>
          <div className="stat">
            <div className="stat__label">Bloqueado</div>
            <div className="stat__value">{counts.blocked}</div>
          </div>
        </section>

        <section className="db__controls">
          <input
            className="db__input"
            placeholder="Buscar etapa..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <select className="db__select" value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option>Todos</option>
            <option>Pendente</option>
            <option>Feito</option>
            <option>Bloqueado</option>
          </select>
        </section>

        <section className="db__table">
          <div className="db__thead">
            <div>Etapa</div>
            <div>Status</div>
            <div>Observação</div>
            <div>Justificativa</div>
            <div>Ação</div>
          </div>

          {filtered.map((s) => (
            <div className="db__row" key={s.id}>
              <div className="db__cellTitle">
                <div className="db__step">{s.title}</div>
                <div className="db__small">ID #{s.id}</div>
              </div>

              <div>
                <span className={`status ${statusColor(s.status)}`}>{s.status}</span>
              </div>

              <div className="db__small">{s.obs || "—"}</div>
              <div className="db__small">{s.atraso || "—"}</div>

              <div>
                <button className="db__btn" onClick={() => toggleStatus(s.id)}>
                  Trocar status
                </button>
              </div>
            </div>
          ))}
        </section>

        <p className="db__note">
          *Esse dashboard é um projeto demonstrativo para portfólio (layout + filtros + interação).
        </p>
      </main>
    </div>
  );
}