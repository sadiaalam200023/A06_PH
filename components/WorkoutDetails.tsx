import Image from "next/image";
import AddtoButton from "./AddtoButton";
import SaveButton from "./SaveButton";
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

interface WorkoutDetailsProps {
  workout: Workout;
}

const WorkoutDetails = ({ workout }: WorkoutDetailsProps) => {
  return (
    <div>
    <main className="min-h-screen px-6 py-10 lg:px-16">
      <div className="max-w-7xl mx-auto mt-8"> 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16"> 
          <div> <div className="h-[400px] lg:h-[650px] overflow-hidden rounded-3xl"> 
            <Image
             src={workout.image} 
             alt={workout.name} 
              width={800}
              height={1500}
  className="w-full h-full object-cover" /> </div> </div>
          <div className="flex flex-col"> 
            <h1 className="text-4xl lg:text-4xl font-bold text-white uppercase"> {workout.name} </h1> 
            <div className="flex flex-wrap gap-2 mt-2"> {workout.muscleGroups.map((muscle) => ( <span key={muscle} className="badge badge-outline badge-success" > {muscle} </span> ))} </div>
             <p className="text-gray-400 mt-2 leading-relaxed"> {workout.description} </p><div className="mt-2"> <h2 className="text-sm font-semibold text-green-500 mb-4"> KEY SPECS </h2> 
            <div className="border border-gray-800 bg-gray-600 rounded-2xl overflow-hidden"> 
              <div className="grid grid-cols-2 border-b border-gray-800"> <div className="p-4 text-xs text-gray-500"> EQUIPMENT </div> <div className="p-4 text-sm text-white"> {workout.equipment} </div> </div> 
            <div className="grid grid-cols-2 border-b border-gray-800"> <div className="p-4 text-xs text-gray-500"> DIFFICULTY </div> <div className="p-4 text-sm text-white"> {workout.difficulty} </div> </div> 
             <div className="grid grid-cols-2 border-b border-gray-800"> <div className="p-4 text-xs text-gray-500"> SETS </div> <div className="p-4 text-sm text-white"> {workout.sets} </div> </div> 
              <div className="grid grid-cols-2 border-b border-gray-800"> <div className="p-4 text-xs text-gray-500"> REPS </div> <div className="p-4 text-sm text-white"> {workout.reps} </div> </div> 
            <div className="grid grid-cols-2 border-b border-gray-800"> <div className="p-4 text-xs text-gray-500"> DURATION </div> <div className="p-4 text-sm text-white"> ◷ {workout.duration} min </div> </div> 
            <div className="grid grid-cols-2 border-b border-gray-800"> <div className="p-4 text-xs text-gray-500"> CALORIES </div> <div className="p-4 text-sm text-white"> 🔥 {workout.caloriesBurned} kcal </div> </div> 
             <div className="grid grid-cols-2"> <div className="p-4 text-xs text-gray-500"> RATING </div> <div className="p-4 text-sm text-white"> ★ {workout.rating} </div> </div> </div> </div> 
           
           <div className="mt-4"> <h2 className="text-sm font-semibold text-green-500 mb-4"> INSTRUCTIONS </h2> <ol className="space-y-4"> {workout.instructions.map((instruction, index) => ( <li key={index} className="flex gap-4" > 
             <span className=" flex-shrink-0 w-7 h-7 rounded-full bg-[#22252D] flex items-center justify-center text-xs text-green-500 " > {index + 1} </span><p className="text-sm text-gray-400 leading-relaxed"> {instruction} </p> </li> ))} </ol> </div> 
             <div className="flex flex-col sm:flex-row gap-3 mt-10"> 
              <AddtoButton workout = {workout}></AddtoButton>
              <SaveButton workout={workout} />
               </div> 
              </div> </div> 
              </div>


    </main>
    </div>
  );
};

export default WorkoutDetails;

