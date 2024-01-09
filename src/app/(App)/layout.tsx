import AppBar from '@/components/App/AppBar';
import React from 'react'

interface AppProps {
    children: React.ReactNode;
}

function AppLayout({ children }: AppProps) {
    return (
        <div>
            <AppBar />
            <main className='App max-w-3xl mx-auto w-full md:px-0 px-2'>
                {children}
            </main>
        </div>
    )
}

export default AppLayout