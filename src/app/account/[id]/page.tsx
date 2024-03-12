import { fetchAssignments, fetchUserById } from "@/app/lib/data";
import { patrick_hand } from "@/app/ui/fonts";
import Image from "next/image";

export default async function Page({ params }: { params: { id: number } }) {
  const id = params.id;

  const user = await fetchUserById(id);
  const username = user.username;
  const image = user.image;
  const points = user.points;

  const assignments = await fetchAssignments(id);

  return (
    <div className="flex flex-col items-center gap-2">
      <h2 className={`${patrick_hand.className} text-4xl text-center p-4`}>
        {user.username}
      </h2>
      <div className="flex flex-col bg-blue-500 rounded-full h-30 aspect-square items-center justify-center p-4">
        <p className="text-5xl">{points}</p>
        <p>Points</p>
      </div>
      <div className="flex flex-wrap gap-2 items-center justify-center">
        {/* tasks */}
        {assignments.map((task) => {
          return (
            <div
              key={task.task_name}
              className="text-2xl bg-white aspect-square rounded-md p-4"
            >
              <p>{task.task_icon}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
