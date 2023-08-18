import Link from "next/link";

export default function home() {
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
      <h1 className="underline text-center">Hi Star hihih</h1>
    </div>
  );
}
