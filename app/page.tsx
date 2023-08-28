import Link from "next/link";
import { todo } from "node:test";
import { prisma } from "./db";
import TodoItem from "./comp/TodoItem";

function getTodos() {
  return prisma.todo.findMany();
}
export default async function Home() {
  let allTodos = await getTodos();

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
      {/* destructuring should have the same name as schema */}
      {allTodos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
}
