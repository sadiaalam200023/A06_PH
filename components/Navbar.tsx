"use client";
import Link from 'next/link';
import logo from "@/assets/logo.png"
import React from 'react';
import Image from 'next/image';

const Navbar = () => {
    return (

<div className="navbar bg-base-100 shadow-sm px-10 flex justify-between items-center">
  
 
  <div className="navbar-start flex items-center gap-2">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
        </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    
    <div className='flex items-center gap-2'>
      <Image src={logo} alt="Company Logo"/>
      <span className='font-bold text-white'>FITLOG</span>
    </div>
  </div>

  
  <div className="navbar-center hidden lg:flex justify-center">
    <ul className="menu menu-horizontal px-1">
      <li> <a className="btn btn-sm rounded-4xl bg-green-500 text-white normal-case">Workouts</a></li>
      <li>
      <a className="btn btn-ghost btn-sm rounded-4xl normal-case text-base-content/70 hover:bg-base-200">My plans</a> </li>
    </ul>
  </div>

  
  <div className="navbar-end flex gap-2">
    <button className="btn btn-ghost">
      Plan <div className="badge badge-sm bg-green-500">0</div>
    </button>

    <button className="btn btn-ghost">
      Saved <div className="badge badge-sm bg-gray-500 rounded-2xl">0</div>
    </button>
  </div>

</div>

);
};

export default Navbar;