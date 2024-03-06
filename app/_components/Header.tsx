"use client";

import { Button } from "@/components/ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { ArrowRight, ArrowUpRight, Euro, LogIn, Menu, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Header() {
  return (
    <header className="bg-[#161617] px-10 py-5">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center justify-center gap-2">
          <Image src="/favicon.png" alt="logo" width={30} height={30} />
          <h2 className=" text-white text-xl font-bold">
            Diagram
            <span className="text-yellow-500">Docs</span>
          </h2>
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  className="text-[#CDCDCD] transition hover:text-gray-400/75"
                  href="#"
                >
                  {" "}
                  About{" "}
                </Link>
              </li>

              <li>
                <a
                  className="text-[#CDCDCD] transition hover:text-gray-400/75"
                  href="#"
                >
                  {" "}
                  Careers{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-[#CDCDCD] transition hover:text-gray-400/75"
                  href="#"
                >
                  {" "}
                  History{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-[#CDCDCD] transition hover:text-gray-400/75"
                  href="#"
                >
                  {" "}
                  Services{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-[#CDCDCD] flex items-center gap-1 transition hover:text-gray-400/75"
                  href="#"
                >
                  {" "}
                  Prices <Euro size={16} color="orange" />
                </a>
              </li>

              <li>
                <a
                  className="text-[#CDCDCD] flex gap-1 items-center transition hover:text-gray-400/75"
                  href="#"
                >
                  {" "}
                  Docs <ArrowUpRight size={16} />
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4 items-center">
              <a
                href="#"
                className="text-[#CDCDCD] block mr-2 hover:opacity-75"
              >
                <LoginLink>Login</LoginLink>
              </a>
              <a
                href="#"
                className=" items-center justify-center rounded-[5px] hidden sm:block"
              >
                <RegisterLink>
                  <h2 className="flex items-center text-[14px] text-gray-800 font-medium bg-white hover:bg-gray-300 px-4 py-1.5 rounded-[5px] gap-1">
                    Try DiagramDocs
                    <ArrowRight size={20} />
                  </h2>
                </RegisterLink>
              </a>
            </div>

            <button className="block items-center md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Menu
                    color="white"
                    className="hover:text-xl cursor-pointer"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mr-20 mt-2">
                  <DropdownMenuLabel>DiagramDocs</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Docs</DropdownMenuItem>
                  <DropdownMenuItem>Blogs</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel className="hover:bg-gray-100 rounded-md">
                    <RegisterLink className="cursor-pointer p-1 flex gap-2 items-center">
                      Register
                      <LogIn className="h-4 w-4" />
                    </RegisterLink>
                  </DropdownMenuLabel>
                </DropdownMenuContent>
              </DropdownMenu>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
