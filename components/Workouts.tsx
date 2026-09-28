import React from 'react';
import WorkoutCards from './WorkoutCards';


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
const getWorkouts =  async(): Promise<Workout[]> => {
    const res = await fetch("https://api.api-store.workers.dev/api/fitlog")
    const data = await res.json();
    return data;
}

const Workouts = async() => {
    
    const workoutData = await getWorkouts();
    console.log(workoutData, "Workouts")
    return (
        <div >
            <div className='px-10'>
            <h2><span className='text-white font-bold text-3xl'>THE LIBRARY</span></h2>
            <p><span className='text-gray-300 mb-4'>Twelve lifts covering every major muscle group.</span></p> </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10 mt-4">
      {workoutData.map((workout) => (
        <WorkoutCards
          key={workout.id}
          workout={workout}
        />
      ))}
    </div> </div>
        
    );
};

export default Workouts;