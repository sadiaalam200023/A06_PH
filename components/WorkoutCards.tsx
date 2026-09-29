import React from 'react';


import Image from "next/image";
import Link from 'next/link';

interface Workout {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}

interface WorkoutCardProps {
  workout: Workout;
}
const WorkoutCards = ({workout}: WorkoutCardProps) => {
    return (  <Link href={`/Workout/${workout.id}`}>
    <div className="card bg-[#15171D] shadow-md overflow-hidden  hover:-translate-y-1
  hover:shadow-xl
  hover:cursor-pointer">
      
     
      <figure className="h-52 w-full">
        <Image
          src={workout.image}
          alt={workout.name}
          width={500}
          height={300}
          className="w-full h-full object-cover"
        />
      </figure>

    
      <div className="card-body p-5">

        
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="badge badge-success bg-green-600 text-xs text-black font-bold uppercase"
            >
              {muscle}
            </span>
          ))}
        </div>

        <h2 className="card-title text-lg text-white mt-1">
          {workout.name}
        </h2>

       
        <p className="text-sm text-gray-400">
          {workout.equipment}
        </p>

       
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-700">

        
          <div className="flex items-center gap-1 text-gray-400 text-sm">
            <span>◷</span>
            <span>{workout.duration} min</span>
          </div>

          
          <div className="flex items-center gap-1 text-gray-400 text-sm">
            <span>🔥</span>
            <span>{workout.caloriesBurned} kcal</span>
          </div>

          
          <div className="flex items-center gap-1 text-gray-400 text-sm">
            <span>★</span>
            <span>{workout.rating}</span>
          </div>

        </div>

      </div>
    </div> </Link>
  );
};

export default WorkoutCards;