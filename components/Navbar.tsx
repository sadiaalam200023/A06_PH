"use client";
import Link from 'next/link';
import logo from "@/assets/logo.png"

import Image from 'next/image';


import { useContext } from "react";
import { workoutsContext } from "@/WorkoutProvider/WorkoutProvider";

const Navbar = () => {
    const workoutProvider = useContext(workoutsContext);

  if (!workoutProvider) {
    throw new Error("Navbar must be used inside WorkoutProvider");
  }
const { addWorkouts, saveWorkouts } = workoutProvider;
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
        <li>
          <Link href="/#library">Workouts</Link>
        </li>
        
        <li><a>My Plans</a></li>
      </ul>
    </div>
    
    <div className='flex items-center gap-2'>
      <Image src={logo} alt="Company Logo"/>
      <span className='font-bold text-white'>FITLOG</span>
    </div>
  </div>

  
  <div className="navbar-center hidden lg:flex justify-center">
    <ul className="menu menu-horizontal px-1">
      <li> <Link 
        href="/#library" 
        className="btn btn-sm rounded-4xl bg-green-500 text-white normal-case"
      >
        Workouts
      </Link>
</li>
      <li>
 <Link href="/myPlan">
    My Plan
  </Link> </li>
    </ul>
  </div>

  
  <div className="navbar-end flex gap-2">
    <div>
          <Link href="/myPlan" className="flex items-center gap-2">
  Plan
  <span className="badge badge-success">
    {addWorkouts.length}
  </span>
</Link>
        </div>

    <div>
          <Link href="/myPlan" className="flex items-center gap-2">
  Saved
  <span className="badge badge-success">
    {saveWorkouts.length}
  </span>
</Link>
        </div>
  </div>

</div>

);
};

export default Navbar;