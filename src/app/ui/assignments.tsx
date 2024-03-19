import Assignment from "./assignment";
import { fetchAssignmentsByUser } from "../lib/data";

export default async function AssignmentCards({ id }: { id: number }) {
  const user_id = id;
  const assignments = await fetchAssignmentsByUser(user_id);

  return (
    <form className="flex flex-col bg-white text-black p-4 rounded-md shadow-md">
      <p className="text-center font-bold">Task List</p>
      {assignments.map((task) => {
        const icon = task.task_icon;
        const name = task.task_name;
        const description = task.task_description;
        const value = task.task_value;
        const id = task.assign_id;

        return (
          <Assignment
            key={id}
            task_icon={icon}
            task_name={name}
            task_description={description}
            task_value={value}
            assign_id={id}
          />
        );
      })}
      <p className="text-center m-4 bg-amber-200 p-2">
        <span id="totalValue" className="font-bold"></span> Points
      </p>
      <input
        type="submit"
        value="Send Check"
        className="bg-blue-300 p-4 rounded-md justify-self-center hover:bg-blue-500 cursor-pointer"
      />
    </form>
  );
}
