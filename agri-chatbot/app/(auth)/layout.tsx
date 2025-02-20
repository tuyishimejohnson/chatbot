import React from 'react'
export default function AuthLayout({children}: {children: React.ReactNode}) {
  return (
    <div className='w-3/4 bg-blue-200 text-2xl'>
      {children}
    </div>   
  )
}
