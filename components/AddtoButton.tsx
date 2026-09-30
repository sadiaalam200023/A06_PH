

"use client";

import { useContext } from "react";
import { toast } from "react-toastify";
import { workoutsContext } from "@/WorkoutProvider/WorkoutProvider";

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

const AddtoButton = ({ workout }: { workout: Workout }) => {
  const workoutProvider = useContext(workoutsContext);

  if (!workoutProvider) {
    throw new Error("AddtoButton must be used inside WorkoutProvider");
  }

  const { addWorkouts, setAddWorkouts } = workoutProvider;

  const handleAddto = () => {
    if (addWorkouts.some((item) => item.id === workout.id)) {
      toast.info("Workout is already in today's plan");
      return;
    }

    if (addWorkouts.length >= 5) {
      toast.warning("You can only add 5 workouts to today's plan");
      return;
    }

    setAddWorkouts([...addWorkouts, workout]);

    toast.success("✓ Added to today's plan");
  };

  return (
    <button
      className="btn btn-success flex-1"
      onClick={handleAddto}
    >
      + Add to today&apos;s plan
    </button>
  );
};

export default AddtoButton;