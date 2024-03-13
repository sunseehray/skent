import Link from "next/link";
import Image from "next/image";
import { patrick_hand, inter } from "./fonts";
import { fetchUsers } from "../lib/data";


export default async function UserCards() {
  const users = await fetchUsers();
  return (
    <>
      {users.map((user) => {
        const name = user.username;
        const image = user.image;
        const points = user.points;
        const id = user.user_id;

        return (
          <Link key={name} href={`/account/${id}`}
          className="flex flex-col rounded-lg p-4 gap-1 bg-white text-black items-center shadow-md"
          >
            <Image
              src={image}
              width={70}
              height={70}
              alt={`Photo of ${name}`}
              className="rounded-full"
            />
            <p className={`${patrick_hand.className} text-xl`}>{name}</p>
            <p className={`${inter.className} text-2xl`}>{points}</p>
          </Link>
        );
      })}
    </>
  );
}
