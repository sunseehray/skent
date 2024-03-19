"use client";

import {
  PlusCircleIcon,
  UserPlusIcon,
  UserMinusIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  {
    name: "Submit Check",
    href: "/check",
    icon: PlusCircleIcon,
  },
  {
    name: "Account",
    href: "/account",
    icon: UserCircleIcon,
  },
  {
    name: "Withdraw",
    href: "/withdraw",
    icon: UserMinusIcon,
  },
  {
    name: "Deposit",
    href: "/deposit",
    icon: UserPlusIcon,
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 text-black p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
