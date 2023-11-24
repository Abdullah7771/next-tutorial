import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CustomButton from './CustomButton'


const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center p-60 sm:px-16 px-6 py-4'>
            <Link href='/home' className='flex justify-center items-center' >
            <Image src='/logo.svg' alt='carhublogo ' width={118} height={18} className='object-contain'/> 

            </Link>
    <CustomButton title='Sign In' containerStyles='text-primary-blue rounded-full border bg-white min-w-[130px]' btnType='button'/>
        </nav>
       
        </header>
  )
}

export default Navbar