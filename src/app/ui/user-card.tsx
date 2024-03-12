import Link from "next/link";
import Image from "next/image";
import { patrick_hand } from "./fonts";

const users = [
  {
    id: 1,
    name: "Max",
    image: "/images/max.png",
    points: 4,
    password: "1234",
  },
  {
    id: 2,
    name: "Sander",
    image: "/images/sander.png",
    points: 3,
    password: "1234",
  },
  {
    id: 3,
    name: "Julian",
    image: "/images/julian.png",
    points: 2,
    password: "1234",
  },
];

export default function UserCards() {
  return (
    <>
      {users.map((user) => {
        const name = user.name;
        const image = user.image;
        const points = user.points;
        const id = user.id;

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
