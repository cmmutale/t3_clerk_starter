import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

function AppDrawer() {
    return (
        <Sheet>
            <SheetTrigger>
                <HamburgerMenuIcon />
            </SheetTrigger>
            <SheetContent side='left'>
                <SheetHeader>
                    <SheetTitle>
                        <p className='font-semibold'>WISO</p>
                    </SheetTitle>
                </SheetHeader>
                <ul className='w-full space-y-1'>
                    <li className='w-full'>
                        <Link
                            className='py-1 px-2 hover:bg-accent rounded-lg block w-full'
                            href='/dashboard'>Dashboard</Link>
                    </li>
                    <li>
                        <Link
                            className='py-1 px-2 hover:bg-accent rounded-lg block w-full'
                            href='/profile'>Profile</Link>
                    </li>
                </ul>
            </SheetContent>
        </Sheet>

    )
}

export default AppDrawer