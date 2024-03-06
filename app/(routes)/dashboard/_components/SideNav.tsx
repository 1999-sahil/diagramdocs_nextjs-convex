import React, { useContext, useEffect, useState } from 'react'
import SideNavTop, { TEAM } from './SideNavTop'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import SideNavBottom from './SideNavBottom';
import { useConvex, useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { toast } from 'sonner';
import { FileListsContext } from '@/app/_context/FileListsContext';

function SideNav() {

  const [activeTeam, setActiveTeam] = useState<TEAM | any>();
  const [totalFiles, setTotalFiles] = useState<Number>();

  const {fileList_, setFileList_} = useContext(FileListsContext);

  const convex = useConvex();

  const { user }:any = useKindeBrowserClient();

  const createFile = useMutation(api.files.createFile);

  const onFileCreate = (fileName:string) => {
    console.log(fileName);
    createFile({
      fileName: fileName,
      teamId: activeTeam?._id,
      createdBy: user?.email,
      archived: false,
      document: "",
      whiteboard: "",
    }).then((res) => {
      if(res) {
        getFiles();
        toast("File Created Successfully!!!", {
          description: "You can change file name later."
        })
      }
    }, (e) => {
      toast("Something went wrong!!!", {
        description: "Error while creating file."
      })
    })
  };

  useEffect(() => {
    activeTeam && getFiles();
  }, [activeTeam]);

  const getFiles = async () => {
    const result = await convex.query(api.files.getFiles, { teamId: activeTeam?._id });
    console.log(result);
    setFileList_(result);
    setTotalFiles(result?.length);
  };

  return (
    <div className='h-screen w-72 flex flex-col px-6 py-5 border-r border-gray-200'>
      <div className='flex-1'>
        <SideNavTop user={user} setActiveTeamInfo={(activeTeam: TEAM) => setActiveTeam(activeTeam)} />
      </div>
      <div>
        <SideNavBottom onFileCreate={onFileCreate} totalFiles={totalFiles} />
      </div>
    </div>
  )
}

export default SideNav