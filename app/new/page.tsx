import Link from "next/link";

export default function Page() {
  return (
    <div className="text-center">
      <h1 className="text-5xl pb-5">New Task</h1>
      <form>
        <input
          type="textbox"
          className="text-white border border-white rounded-sm bg-transparent"
          placeholder="Add Task"
          name="textbox"
        />
        <div className="">
          <Link href=".." className="hover:underline pr-10">
            ← Back
          </Link>
          <button type="submit" className="pt-5 hover:underline ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
