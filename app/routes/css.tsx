import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { prisma } from "~/prisma.server";

export async function loader() {
  const chapters = await prisma.remixChapter.findMany();

  return json(chapters);
}

export default function Test() {
  const chapters = useLoaderData<typeof loader>();

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Nossos capítulos</h1>
        <Link to="/create" className="add-button">Adicionar +</Link>
      </div>
      <div className="chapters-list">
        {chapters.map(chapter => (
          <div className="chapter">
            <span>id: {chapter.id}</span>
            <span>title: {chapter.title}</span>
            <span>subject: {chapter.subject}</span>
            <span>createdAt: {chapter.createdAt}</span>
            <span>updatedAt: {chapter.updatedAt}</span>
          </div>
        ))}
      </div>
    </>
  );
}
