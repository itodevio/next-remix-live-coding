import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Nossos capítulos</h1>
        <Link
          to="/create"
          className="add-button"
          role="button"
        >
          Adicionar +
        </Link>
      </div>
      <div className="chapters-list"></div>
    </>
  );
}
