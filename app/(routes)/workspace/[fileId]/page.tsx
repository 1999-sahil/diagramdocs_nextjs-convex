'use client'
import React, { useEffect, useState } from 'react'
import WorkspaceHeader from '../_components/WorkspaceHeader'
import Editor from '../_components/Editor'
import { useConvex } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { FILE } from '../../dashboard/_components/FileList';
import Canvas from '../_components/Canvas';

function Workspace({ params }:any) {

  const [triggerSave, setTriggerSave] = useState(false);
  const [fileData, setFileData] = useState<FILE | any>();

  const convex = useConvex();

  useEffect(() => {
    params.fileId && getFileById();
  }, []);

  const getFileById = async () => {
    const result = await convex.query(api.files.getFileById, { _id: params.fileId });
    setFileData(result);
  };

  return (
    <div>
        <WorkspaceHeader 
          onSave={() => setTriggerSave(!triggerSave)}
          fileData={fileData}
        />

        {/** workspace layout */}
        <div className='grid grid-cols-1 md:grid-cols-2'>
            {/** document (left section) */}
            <div className='h-screen'>
                <Editor 
                  onSaveTrigger={triggerSave} 
                  fileId={params.fileId}
                  fileData={fileData}
                />
            </div>

            {/** whiteboard/canvas (right section) */}
            <div className='h-screen border-l max-md:border-t'>
              <Canvas 
                onSaveTrigger={triggerSave} 
                fileId={params.fileId}
                fileData={fileData}
              />
            </div>
        </div>
    </div>
  )
}

export default Workspace