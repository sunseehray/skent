import { fetchUserById } from "@/app/lib/data";
import { patrick_hand } from "@/app/ui/fonts";
import Image from "next/image";

export default async function Page() {
  const user = await fetchUserById(1);
  const username = user.username;
  const image = user.image;
  const points = user.points;
  return (
    <div>
      <h2 className={`${patrick_hand.className} text-4xl text-center p-4`}>{user.username}</h2>
      <Image
        src={image}
        width={100}
        height={100}
        alt={`Photo of ${username}`}
        className="rounded-full"
      />
      <div>Running Points: {points}</div>
    </div>
  );
}
