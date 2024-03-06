import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { api } from "@/convex/_generated/api";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { useConvex } from "convex/react";
import { ChevronDown, LayoutGrid, LogOutIcon, Settings, Users } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export interface TEAM {
  createdBy: String,
  teamName: String,
  _id: String,
}

function SideNavTop({ user, setActiveTeamInfo }: any) {

  const convex = useConvex();
  const router = useRouter();

  const [teamList, setTeamList] = useState<TEAM[]>();
  const [activeTeam, setActiveTeam] = useState<TEAM>();

  const menu = [
    {
      id: 1,
      name: 'Create Team',
      path: '/teams/create',
      icon: Users
    },
    {
      id: 2,
      name: 'Settings',
      path: '',
      icon: Settings
    }
  ];

  useEffect(() => {
    user && getTeamList();
  }, [user]);

  useEffect(() => {
    activeTeam && setActiveTeamInfo(activeTeam);
  }, [activeTeam]);

  const getTeamList = async () => {
    const result = await convex.query(api.teams.getTeam, { email: user?.email });
    //console.log("TeamList: ", result);
    setTeamList(result);
    setActiveTeam(result[0]);
  };

  const onMenuClick = (item: any) => {
    if (item.path) {
      router.push(item.path);
    }
  };

  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <div className="flex items-center gap-2 hover:bg-gray-200 py-3 px-4 rounded-lg cursor-pointer">
            <Image src="/favicon.png" alt="logo" width={20} height={30} />
            <h2 className="flex gap-2 items-center font-bold whitespace-nowrap overflow-hidden text-clip">
              {activeTeam?.teamName && activeTeam.teamName.substring(0, 15)}
            </h2>
            <ChevronDown size={17} />
          </div>
        </PopoverTrigger>
        <PopoverContent className="border-[1px] ml-7 rounded-lg border-gray-300">
          {/** team */}
          <div>
            {teamList?.map((item, index) => (
              <h2
                key={index}
                className={`font-semibold my-1 text-[14px] cursor-pointer text-wrap whitespace-nowrap p-1.5 rounded-md text-gray-700
                  ${activeTeam?._id == item._id && 'bg-blue-500 text-white hover:bg-blue-600'}
                `}
                onClick={() => setActiveTeam(item)}
              >
                {item.teamName}
              </h2>
            ))}
          </div>

          <Separator className="my-2" />

          {/** menu */}
          <div>
            {menu.map((item, index) => (
              <h2
                key={index}
                className="flex gap-2 cursor-pointer font-semibold items-center p-2 hover:bg-gray-100 rounded-lg text-sm"
                onClick={() => onMenuClick(item)}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </h2>
            ))}
            <LogoutLink>
              <h2 className="flex gap-2 cursor-pointer font-semibold items-center p-2 hover:bg-gray-100 rounded-lg text-sm">
                <LogOutIcon className="w-4 h-4" />
                Logout
              </h2>
            </LogoutLink>
          </div>

          <Separator className="my-2" />

          {/** user info */}
          {user && (
            <div className="flex items-center gap-2 mt-3">
              <Image src={user?.picture} alt='user' width={30} height={30} className="rounded-full" />
              <div className="flex flex-col">
                <h2 className="text-sm font-semibold">
                  {user?.given_name}
                  {user?.family_name}
                </h2>
                <h2 className="text-xs font-semibold text-gray-500">{user?.email}</h2>
              </div>
            </div>
          )}
        </PopoverContent>
      </Popover>

      {/** All File Button */}
      <Button variant='outline' className="w-full mt-8 justify-start gap-2 font-bold rounded-[5px] bg-gray-100">
        <LayoutGrid className="h-5 w-5" />
        All Files
      </Button>
    </div>
  );
}

export default SideNavTop;
