"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/convex/_generated/api";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useMutation } from "convex/react";
import { Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

function CreateTeam() {
  
  const [teamName, setTeamName] = useState('');
  const { user }:any = useKindeBrowserClient();
  const router = useRouter();

  const createTeam = useMutation(api.teams.createTeam);

  const createNewTeam = () => {
    createTeam({
        teamName: teamName,
        createdBy: user?.email,
    }).then(res => {
        console.log(res);
        if(res) {
            router.push('/dashboard');
            toast('Team created successfully!!!', {
                description: 'You can change the team name later'
            });
        }
    })
  };

  return (
    <div className="p-16">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/favicon.png" alt="logo" width={30} height={30} />
        <h2 className="text-xl font-bold">
          Diagram
          <span className="text-yellow-500">Docs</span>
        </h2>
      </Link>
      <div className="flex flex-col items-center justify-center my-20">
        <div className="flex items-center justify-center px-[12px] py-[8px] gap-1.5 border-t-[2px] border-green-600 rounded-[5px] bg-[#a5dfc1]">
          <Users size={16} color="green" />
          <h2 className="text-xs font-semibold text-green-700">Team Name</h2>
        </div>
        <h2 className="font-bold text-gray-700 text-[40px] max-md:text-[30px] text-center py-3 mt-8">
          What should we call your team?
        </h2>
        <h2 className="text-gray-500 text-center">
          You can always change this later from settings.
        </h2>

        <div className="mt-12 w-[40%] max-md:w-full">
          <label className="text-gray-500 font-medium">Team Name</label>
          <Input 
            placeholder="Enter Team Name"
            className="mt-3"
            onChange={(e) => setTeamName(e.target.value)}
           />
        </div>

        <Button 
            className="mt-16 w-[40%] max-md:w-[90%]"
            disabled={!(teamName && teamName?.length > 0)}
            onClick={() => createNewTeam()}
        >Create Team</Button>
      </div>
    </div>
  );
}

export default CreateTeam;
