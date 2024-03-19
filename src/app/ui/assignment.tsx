export default function Assignment({
  task_icon,
  task_name,
  task_description,
  task_value,
  assign_id,
}: {
  task_icon: string;
  task_name: string;
  task_description: string;
  task_value: number;
  assign_id: number;
}) {
  return (
    <div className="flex flex-row gap-2 p-2">
      <input type="checkbox" name={`${assign_id}`} id={`${assign_id}`} value={task_value}/>
      <label htmlFor={`${assign_id}`} title={task_description}>
        {task_icon} {task_name}
      </label>
    </div>
  );
}
