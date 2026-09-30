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


interface SaveButtonProps {
  workout: Workout;
}

const SaveButton = ({ workout }: SaveButtonProps) => {
  const workoutProvider = useContext(workoutsContext);

  if (!workoutProvider) {
    throw new Error("SaveButton must be used inside WorkoutProvider");
  }

  const { saveWorkouts, setSaveWorkouts } = workoutProvider;

  const handleSave = () => {
    if (saveWorkouts.some((item) => item.id === workout.id)) {
      toast.info("Workout is already saved");
      return;
    }

    setSaveWorkouts([...saveWorkouts, workout]);

    toast.success("🔖 Saved for later");
  };

  return (
    <button
      className="btn btn-outline flex-1"
      onClick={handleSave}
    >
      {saveWorkouts.some((item) => item.id === workout.id)
        ? "✓ Saved"
        : "🔖 Save for later"}
    </button>
  );
};

export default SaveButton;