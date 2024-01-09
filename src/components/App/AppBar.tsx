import React from 'react'
import { UserButton } from '@clerk/nextjs'
import { Button } from '../ui/button'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import AppDrawer from './AppDrawer'

function AppBar() {
    return (
        <div className='h-[60px] shadow-sm'>
            <div className="wrapper flex items-center justify-between max-w-3xl mx-auto h-full 
            md:px-0 px-2">
                <div className="left">
                    <AppDrawer />
                </div>
                <div className="middle grow">
                    <div className='AppTitle font-bold w-full text-center'>
                        <p>My App</p>
                    </div>
                </div>
                <div className="right">
                    <UserButton afterSignOutUrl='/' />
                </div>
            </div>
        </div>
    )
}

export default AppBar