import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (
        <div className='relative h-screen'>
            <Image src='/landing-splash.jpg' alt='Domoro Rental Platform Hero Section' fill className='object-cover object-center' priority></Image>
            <div className='absolute inset-0 black'></div>
        </div>
    )
}

export default HeroSection