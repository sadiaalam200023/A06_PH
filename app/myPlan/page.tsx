"use client";
import { toast } from "react-toastify";
import Link from "next/link";
import Image from "next/image";
import { useContext, useState } from "react";
import { workoutsContext } from "@/WorkoutProvider/WorkoutProvider"
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

const MyPlanPage = () => {
  const workoutProvider = useContext(workoutsContext);
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  if (!workoutProvider) {
    throw new Error("MyPlanPage must be used inside WorkoutProvider");
  }

  const {
    addWorkouts,
    setAddWorkouts,
    saveWorkouts,
    setSaveWorkouts,
  } = workoutProvider;

  const currentWorkouts =
    activeTab === "today" ? addWorkouts : saveWorkouts;

  
  const exercises = addWorkouts.length;

  const minutes = addWorkouts.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const calories = addWorkouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  
  const handleRemove = (id: number) => {
    setAddWorkouts((current) =>
      current.filter((workout) => workout.id !== id)
    );

  toast.info("Workout removed");
  };

  
  const handleRemoveSaved = (id: number) => {
    setSaveWorkouts((current) =>
      current.filter((workout) => workout.id !== id)
    );
  };

  return (
    <main className="min-h-screen bg-[#0B0D10] px-5 py-12 text-white">
      <div className="mx-auto max-w-6xl">

       
        <div className="mb-10">
          <h1 className="text-4xl font-black tracking-wide">
            MY PLAN
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          
          <div className="rounded-xl border border-gray-800 bg-[#15171D] p-6">
            <p className="text-sm uppercase tracking-wider text-gray-400">
              Exercises
            </p>

            <p className="mt-2 text-3xl font-bold">
              {exercises}
            </p>
          </div>

          <div className="rounded-xl border border-gray-800 bg-[#15171D] p-6">
            <p className="text-sm uppercase tracking-wider text-gray-400">
              Minutes
            </p>

            <p className="mt-2 text-3xl font-bold">
              {minutes}
            </p>
          </div>

          <div className="rounded-xl border border-gray-800 bg-[#15171D] p-6">
            <p className="text-sm uppercase tracking-wider text-gray-400">
              Calories
            </p>

            <p className="mt-2 text-3xl font-bold">
              {calories}
            </p>
          </div>

        </div>

        
        <div className="mt-10 flex gap-8 border-b border-gray-800">
          <button
            onClick={() => setActiveTab("today")}
            className={`pb-4 text-sm font-bold uppercase tracking-wider ${
              activeTab === "today"
                ? "border-b-2 border-green-500 text-green-400"
                : "text-gray-500"
            }`}
          >
            Today's Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`pb-4 text-sm font-bold uppercase tracking-wider ${
              activeTab === "saved"
                ? "border-b-2 border-green-500 text-green-400"
                : "text-gray-500"
            }`}
          >
            Saved
          </button>
        </div>

        
        <div className="mt-8 space-y-4">

          {currentWorkouts.length === 0 ? (
           
            <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
              <h2 className="text-2xl font-black tracking-wide">
                NOTHING HERE YET
              </h2>

              <p className="mt-3 max-w-md text-sm text-gray-500">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/"
                className="mt-6 rounded-lg bg-green-500 px-6 py-3 text-sm font-bold text-black transition hover:bg-green-400"
              >
                Go to workouts
              </Link>
            </div>
          ) : (
            currentWorkouts.map((workout: Workout) => (
              <div
                key={workout.id}
                className="flex flex-col gap-5 rounded-xl border border-gray-800 bg-[#15171D] p-4 sm:flex-row sm:items-center"
              >

                <div className="relative h-28 w-full shrink-0 overflow-hidden rounded-lg sm:w-40">
                  <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover"
                  />
                </div>

              
                <div className="flex-1">

                  <h2 className="text-lg font-black uppercase">
                    {workout.name}
                  </h2>

                  <p className="mt-1 text-sm text-gray-400">
                    {workout.equipment}
                  </p>

                 
                  <div className="mt-4 flex flex-wrap gap-5 text-sm text-gray-400">
                    <span>
                      ⏱ {workout.duration} min
                    </span>

                    <span>
                      🔥 {workout.caloriesBurned} kcal
                    </span>

                    <span>
                      ★ {workout.rating}
                    </span>
                  </div>

                </div>

                
                <div className="flex flex-wrap gap-2 sm:flex-col lg:flex-row">

                  <Link
                    href={`/Workout/${workout.id}`}
                    className="rounded-lg border border-gray-700 px-4 py-2 text-xs font-bold transition hover:border-green-500 hover:text-green-400"
                  >
                    View Details
                  </Link>

                  {activeTab === "today" && (
                    <button
                      className="rounded-lg bg-green-500 px-4 py-2 text-xs font-bold text-black transition hover:bg-green-400"
                    >
                      Mark as Done
                    </button>
                  )}

                  <button
                    onClick={() =>
                      activeTab === "today"
                        ? handleRemove(workout.id)
                        : handleRemoveSaved(workout.id)
                    }
                    className="rounded-lg border border-red-900 px-4 py-2 text-xs font-bold text-red-400 transition hover:bg-red-500 hover:text-white"
                  >
                    ✕
                  </button>

                </div>
              </div>
            ))
          )}

        </div>
      </div>
    </main>
  );
};

export default MyPlanPage;