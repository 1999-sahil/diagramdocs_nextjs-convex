import { Button } from "@/components/ui/button";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Search, Send } from "lucide-react";
import Image from "next/image";
import React from "react";

function Header() {

    const { user }:any = useKindeBrowserClient();

    return (
        <div className="flex items-center justify-end gap-4 w-full">
            <div className="flex gap-2 items-center border rounded-[5px] p-1.5">
                <Search className="h-4 w-4" />
                <input placeholder="Search" type="text" />
            </div>
            <div className="">
                <Image src={user?.picture} alt="user" width={30} height={30} className="rounded-full" />
            </div>
            <Button className="h-8.5 gap-2 items-center text-sm bg-blue-500 hover:bg-blue-700 text-white rounded-[5px]">
                <Send className="w-4 h-4" />
                Invite
            </Button>
        </div>
    );
}

export default Header;
