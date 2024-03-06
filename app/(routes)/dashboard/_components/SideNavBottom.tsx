import { Button } from '@/components/ui/button';
import { Archive, Flag, Github, Lock } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose
} from "@/components/ui/dialog"


function SideNavBottom({ onFileCreate, totalFiles }:any) {

    const [fileInput, setFileInput] = useState('');

    const menu = [
        {
            id: 1,
            name: 'Getting Started',
            path: '',
            icon: Flag
        },
        {
            id: 2,
            name: 'Github Sync ',
            path: '',
            icon: Github
        },
        {
            id: 3,
            name: 'Private Files',
            path: '',
            icon: Lock
        },
        {
            id: 4,
            name: 'Archive',
            path: '',
            icon: Archive
        }
    ];

    return (
        <div>
            {menu.map((item, index) => (
                <h2 key={index} className='flex items-center gap-2 text-sm font-medium hover:border-[1px] hover:border-gray-300 p-1 my-1 cursor-pointer hover:bg-gray-100 rounded-md'>
                    <item.icon className='w-4 h-4' />
                    {item.name}
                </h2>
            ))}

            {/** add new file */}
            <Dialog>
                <DialogTrigger className='w-full' asChild>
                    {/** add file button */}
                    <Button className='w-full justify-start my-4 bg-blue-500 hover:bg-blue-700 rounded-[5px] text-white'>
                        New File
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create New File</DialogTitle>
                        <DialogDescription>
                           <input 
                                placeholder='Enter File Name' 
                                className='w-full mt-5 p-2'
                                onChange={(e) => setFileInput(e.target.value)}
                            />
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button 
                                className='bg-blue-500 hover:bg-blue-700'
                                disabled={!(fileInput && fileInput.length > 3)}
                                onClick={() => onFileCreate(fileInput)}
                            >
                                Create File
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>


            {/** progress bar */}
            <div className='h-3 w-full bg-gray-200 rounded-full'>
                <div 
                    className={`h-3 rounded-full bg-gray-600`}
                    style={{ width: `${(totalFiles/20) * 100}%` }}
                ></div>
            </div>

            {/** upgrade */}
            <h2 className='text-xs mt-5'>
                <strong>{totalFiles}</strong> out of <strong>20</strong> files used
            </h2>
            <h2 className='text-xs mt-1'>
                <Link href='/'>
                    <strong className='underline'>Upgrade</strong>
                </Link> your plan for unlimited access.
            </h2>
        </div>
    )
}

export default SideNavBottom