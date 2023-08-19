import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Link href="/" className="hover:underline">
        Back
      </Link>
      <h1>New, Bitch</h1>
    </div>
  );
}
