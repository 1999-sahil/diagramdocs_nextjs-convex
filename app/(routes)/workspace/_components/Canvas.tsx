import React, { useEffect, useState } from 'react'
import { Excalidraw, MainMenu, WelcomeScreen } from '@excalidraw/excalidraw'
import Image from 'next/image'
import { FILE } from '../../dashboard/_components/FileList'
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

function Canvas({ onSaveTrigger, fileId, fileData }: { onSaveTrigger:any, fileId:any, fileData:FILE }) {
  
  const [whiteboardData, setWhiteboardData] = useState<any>();

  const updateWhiteboard = useMutation(api.files.updateWhiteboard);

  useEffect(() => {
    onSaveTrigger && saveWhiteboard();
  }, [onSaveTrigger]);

  const saveWhiteboard = () => {
    updateWhiteboard({
      _id: fileId,
      whiteboard: JSON.stringify(whiteboardData),
    }).then((res) => console.log(res));
  };
  
  return (
    <div style={{ height: "100%" }} className='h-full'>
      {fileData && <Excalidraw
        theme='light'
        initialData={{
          elements: fileData?.whiteboard && JSON.parse(fileData.whiteboard)
        }}
        onChange={(excalidrawElements, appState, files) => {
          setWhiteboardData(excalidrawElements)
          }
        }
        UIOptions={{
          canvasActions: {
            saveToActiveFile: false,
            loadScene: false,
            export: false,
            toggleTheme: false,
          }
        }} 
      >
        <MainMenu>
          <MainMenu.DefaultItems.ClearCanvas />
          <MainMenu.DefaultItems.SaveAsImage />
          <MainMenu.DefaultItems.ChangeCanvasBackground />
        </MainMenu>

        <WelcomeScreen>
          <WelcomeScreen.Center>
            <div className='flex items-center gap-2'>
              <Image src='/favicon.png' alt='logo' width={40} height={40} />
              <h2 className='font-bold text-4xl text-purple-800'>
                Diagram<span className='text-yellow-500'>Docs</span>
              </h2>
            </div>
            <WelcomeScreen.Center.Heading>
              Welcome To DiagramDocs Whiteboard Tool !!
            </WelcomeScreen.Center.Heading>
          </WelcomeScreen.Center>
        </WelcomeScreen>
      </Excalidraw>
    }    
    </div>
  )
}

export default Canvas