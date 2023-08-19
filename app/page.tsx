import Link from "next/link";
import { todo } from "node:test";
import { prisma } from "./db";
import { getDefaultFormatCodeSettings } from "typescript";

function getTodos() {
  return prisma.todo.findMany();
}
export default async function Home() {
  let allTodos = await getTodos();
  await prisma.todo.create({ data: { title: "test", complete: false } });
  return (
    <div>
      <header className="flex justify-between">
        <h1>
          <span className="text-2xl font-bold">NextJs' Todo</span>
        </h1>
        <ul className="mx-5 text-xl">
          <Link href="/new" className="inline hover:underline">
            New
          </Link>
        </ul>
      </header>
      <h1 className=" text-center">Todos</h1>
      {allTodos.map((todo) => {
        return <li key={todo.id}>{todo.title}</li>;
      })}
    </div>
  );
}
