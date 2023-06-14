'use client'

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


export default function NotFound() {

    const router = useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            router.push('/');
        }, 2000)
    },[])

    return (
        <div className='flex flex-col justify-center items-center text-white font-mono h-[60vh]'>
            <h2 className='text-6xl'>404</h2>
            <h3 className='text-3xl text-slate-300'>Not Found</h3>
            <p className='text-slate-400'>Redirecting...</p>
        </div>
    )
}