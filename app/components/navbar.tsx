

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {Heart, Search, ShoppingCart, UserIcon } from 'lucide-react'


const Navbar = () => {
  return (
    <nav className= "text-black w-full border-gray-300 h-24 flex items-center justify-between">
    <img
    src='/image.png'
    className="scale-crop w-50 h-32 "></img>
    
    
            <span className="text-3xl font-bold ">Furniro</span>
            <div className=" ml-80 hidden md:flex space-x-4 gap-10 items-center justify-between max-w-7xl mx-auto  ">
                <Link href={"#"} className="text-sm font-normal"
                >Home</Link>
                <Link href={"#"}className="text-sm font-normal"
                >Shop</Link>
                <Link href={"#"}className="text-sm font-normal"
                >Blog</Link>
                <Link href={"#"}className="text-sm font-normal"
                >Contact</Link>
               
                
                
            </div>
            <div className="relative space-x-3">
            <Button variant={"outline"} size={"icon"} className='rounded-full' >
            <UserIcon />
            </Button>
            <Button variant={"outline"} size={"icon"}className='rounded-full' >
            <Search />
            </Button>
            <Button variant={"outline"} size={"icon"} className='rounded-full'>
            <Heart />
            </Button>
            <Button variant={"outline"} size={"icon"} className='rounded-full'>
            <ShoppingCart />
            </Button>

            </div>
           
           
            

    


      
    
    </nav>
  )
}

export default Navbar
