import { Form } from "@remix-run/react";

export default function Create() {
  return (
    <div className="create-chapter">
      <h1 className="create-title">Adicionar capítulo</h1>
      <Form method="post" className="chapter-form">
        <input
          className="form-input"
          name="title"
          placeholder="Titulo do cap"
        />
        <input
          className="form-input"
          name="subject"
          placeholder="Materia do cap"
        />
        <button
          className="form-submit"
          type="submit"
        >
          Enviar
        </button>
      </Form>
    </div>
  );
}
