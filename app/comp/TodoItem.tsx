type TodoItemProps = {
  id: string;
  title: string;
  complete: Boolean;
};

export default function TodoItem({ id, title, complete }: TodoItemProps) {
  return (
    <li>
      <input id={id} type="checkbox" className="cursor-pointer peer" />
      <label htmlFor={id} className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500">
        {title}
      </label>
    </li>
  );
}
