"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { IoCloseOutline } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";

type NavItem = {
  label: string;
  href: string;
};

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);
  const { data: session } = useSession();
  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Make Post", href: "/post" },
    { label: "View", href: "/ideas" },
  ];

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-white px-3 py-3 shadow-sm md:px-10">
      <Link href="/" className="z-50 flex items-center gap-1">
        <Image
          src="/logo.png"
          alt="Naija Venture Hub Logo"
          width={500}
          height={500}
          className="h-10 w-10"
        />
        <p className="text-lg font-semibold max-md:hidden">Naija Venture Hub</p>
      </Link>

      <div className="hidden items-center gap-5 text-lg lg:flex">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>

      <Link href={session ? "/profile" : "/signin"} className="ml-auto text-lg lg:ml-0">
        {session ? (
          session.user?.image ? (
            <img
              src={session.user.image}
              alt={session.user.name ?? "User profile"}
              className="h-10 w-10 rounded-full"
            />
          ) : (
            session.user?.name ?? "Account"
          )
        ) : (
          "Sign In"
        )}
      </Link>

      <button
        type="button"
        onClick={() => setNavOpen((isOpen) => !isOpen)}
        aria-label={navOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={navOpen}
        className="z-50 ml-3 text-2xl lg:hidden"
      >
        {navOpen ? <IoCloseOutline /> : <RiMenu3Line />}
      </button>

      {navOpen && (
        <div className="absolute left-0 top-0 flex h-dvh w-full justify-center bg-white lg:hidden">
          <div className="flex flex-col items-center gap-10 pt-20 text-lg">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setNavOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
