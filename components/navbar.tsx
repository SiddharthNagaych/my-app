import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="border-b bg-background w-full flex items-center">
      <div className="flex w-full items-center justify-between my-4">
        <Link href="/" className="font-bold">
          Home
        </Link>
        <div className="flex items-center gap-x-5 mx-[400px]">
          <Link href="/middleware">Middleware </Link>
          <Link href={"/server"}>Home </Link>
        </div>
        <div className="flex items-center gap-x-5"></div>
        <Link href={"/sign-in"}>
          <div>Login </div>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
