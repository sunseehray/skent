import { patrick_hand } from "./fonts";
import { HomeIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-row bg-green-500 p-4 gap-4 items-center justify-center">
      {/* app title */}
      <Link href="/">
          <h1 className={`${patrick_hand.className} text-4xl`}>SkEnt</h1>
        </Link>
    </header>
  );
}
