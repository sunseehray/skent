import Image from "next/image";
import Header from "./ui/header";
import UserCards from "./ui/user-card";
import { patrick_hand } from "./ui/fonts";

export default function Home() {
  const users = [
    {
      id: 1,
      name: "Max",
      image: "/images/max.png",
      points: 4,
    },
  ]
  return (
    <div>
      <h2 className={`${patrick_hand.className} text-4xl text-center p-4`}>Running Points</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        <UserCards />
      </div>
    </div>
  );
}
