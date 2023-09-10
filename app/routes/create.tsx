import { ActionArgs, json } from "@remix-run/node";
import { Form, useActionData, useNavigation } from "@remix-run/react";

import { prisma } from "~/prisma.server";

export async function action({ request }: ActionArgs) {
  const body = await request.formData();

  const chapter = await prisma.remixChapter.create({
    data: {
      title: body.get('title') as string,
      subject: body.get('subject') as string,
    }
  });

  return json(chapter);
}

export default function Create() {
  const { state: formState } = useNavigation();
  const createdChapter = useActionData<typeof action>();

  return (
    <div className="create-chapter">
      <h1 className="create-title">Adicionar capítulo</h1>
      <Form method="post" className="chapter-form">
        <input
          className="form-input"
          name="title"
          placeholder="Título o capítulo"
        />
        <input
          className="form-input"
          name="subject"
          placeholder="Matéria do capítulo"
        />
        <button
          className="form-submit"
          disabled={formState === 'submitting'}
          type="submit"
        >
          {formState === 'submitting' ? 'Carregando' : 'Enviar'}
        </button>
      </Form>
      <div>{JSON.stringify(createdChapter)}</div>
    </div>
  );
}
