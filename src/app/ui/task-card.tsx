import Link from "next/link";
import Image from "next/image";
import { patrick_hand } from "./fonts";
import { fetchUsers } from "../lib/data";


export default async function TaskCards() {
  const tasks = await fetchTasks();
  return (
    <>
      {tasks.map((task) => {
        const name = task.username;
        const image = task.image;
        const points = task.points;
        const id = task.user_id;

        return (
          <Link key={name} href={`/account/${id}`}
          className="flex flex-col rounded-lg p-4 gap-1 bg-white items-center shadow-md"
          >
            <Image
              src={image}
              width={70}
              height={70}
              alt={`Photo of ${name}`}
              className="rounded-full"
            />
            <p className={`${patrick_hand.className} text-xl`}>{name}</p>
            <p className={`${patrick_hand.className} text-2xl`}>{points}</p>
          </Link>
        );
      })}
    </>
  );
}
