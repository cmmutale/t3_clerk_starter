import Link from 'next/link';
import React from 'react'

interface MarketingProps {
    children: React.ReactNode;
}

function MarketingLayout({ children }: MarketingProps) {
    return (
        <>
            <header>
                <div className='max-w-3xl mx-auto md:px-0 px-2 flex items-center justify-between'>
                    <Link href='/dashboard'>
                        <button>GO TO APP</button>
                    </Link>
                </div>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}

export default MarketingLayout