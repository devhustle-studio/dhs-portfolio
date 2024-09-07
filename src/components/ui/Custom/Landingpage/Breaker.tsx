import React from 'react'

export default function Breaker({children}:any) {
  return (
    <div className='flex gap-x-4 items-center '><span className='h-4 border-b-2 border-dashed border-white w-full'></span><h1 className='font-gil text-4xl'>{children}</h1><span className='h-4 border-b-2 border-dashed border-white w-full'></span></div>
  )
}
