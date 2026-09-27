import React from 'react';
import Image from 'next/image';
import logo from "@/assets/logo.png"
const Foot = () => {
    return (
        
            <div className='bg-base-100 shadow-sm px-10 ' >
             <div className='mt-2 mb-4 flex justify-between items-center'>
             <div className='flex items-center gap-2'>
      <Image src={logo} alt="Company Logo"
       className="rotate-130"/>
      <span className='font-bold text-white'>FITLOG</span>
    </div>
    <div>
        <p><span className='text-xs text-gray-700'>© 2026 FitLog — Workout Library. Train hard, log honest. </span></p>
    </div> </div>
        </div>
        
    );
};

export default Foot;