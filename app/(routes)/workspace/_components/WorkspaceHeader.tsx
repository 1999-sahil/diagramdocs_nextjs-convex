import { Button } from "@/components/ui/button";
import { Link, Save } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FILE } from "../../dashboard/_components/FileList";

function WorkspaceHeader({ onSave, fileData }: { onSave: any, fileData: FILE }) {

  return (
    <div className="px-7 py-3 border-b flex items-center justify-between">
      <div className="flex gap-3 items-center">
        <Image src="/favicon.png" alt="logo" width={25} height={30} />
        {fileData && (
          <h2 className="font-bold text-lg text-gray-800">{fileData.fileName}</h2>
        )}
      </div>
      <div className="flex items-center gap-4">
        <Button
          className="bg-green-500 hover:bg-green-700 h-8 gap-2 text-sm text-white rounded-[5px]"
          onClick={() => onSave()}
        >
          Save
          <Save className="h-4 w-4" />
        </Button>
        <Button className="bg-blue-600 hover:bg-blue-700 h-8 gap-2 text-sm text-white rounded-[5px]">
          Share
          <Link className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

export default WorkspaceHeader;
