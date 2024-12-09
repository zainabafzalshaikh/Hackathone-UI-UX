import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
<div className="h-[400px] relative">
    <img 
    src="/image copy.png"
    alt="header background"/>
    
   
    <div className=" 
    absolute right-5 top-96 m bg-amber-100 py-48 ">
    
    <p className="absolute text-gray-900 font-medium text-left ml-1 left-6 top-16 tracking-wider text-lg">New Arrival </p>
    <h1 className="absolute text-yellow-700 font-extrabold text-left ml-1 left-1 top-20 text-4xl size-96 p-5 mr-8">
                  Discover Our New 
    Collection</h1>
    <p className=" text-slate-950 mt-4 left-6 top-32 text-lg ml-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut 
    elit tellus, 
    luctus nec ullamcorper mattis.</p>
    <Button className="absolute bg-yellow-700 w-36 rounded-none top-64 left-0 ml-7">Buy Now</Button>
   
    </div>
    <div className="mt-12">
<h1 className="text-center justify-between text-2xl font-bold ">Browse The Range</h1>
<p className="text-gray-400 text-center justify-between">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>
<div className=" gap-3 items-center justify-center mt-12 flex">
<img
src="/image copy 2.png"
alt="dining"
className=" h-96 w-80 left-36 rounded-md"

/>


<img
src="/image copy 3.png"
alt="living"
className=" h-96 w-80 ml-32  rounded-md"
/>



<img
src="/image 101.png"
alt="bedroom"
className="h-96 w-80 ml-28"
/>

</div>
<div className="mt-8 space-x-96 items-center justify-between max-w-7xl mx-auto">
<Link href={""} className=" text-4xl font-normal ml-32">Dining</Link>
<Link href={""} className="text-4xl font-normal ">Living</Link>
<Link href={""} className=" text-4xl font-normal ">BedRoom</Link>
</div>
<div>
<h1 className="font-extrabold text-center justify-between mt-12 text-4xl">Our Products</h1>
</div>
</div>

  )
}

export default Header
