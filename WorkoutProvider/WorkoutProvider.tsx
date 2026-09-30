"use client";

import { createContext, useState } from "react";
import type { ReactNode } from "react";

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
interface WorkoutContextType {
  addWorkouts: Workout[];
  setAddWorkouts: React.Dispatch<React.SetStateAction<Workout[]>>;
  saveWorkouts: Workout[];
  setSaveWorkouts: React.Dispatch<React.SetStateAction<Workout[]>>;
}

export const workoutsContext =
  createContext<WorkoutContextType | null>(null);

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [addWorkouts, setAddWorkouts] = useState<Workout[]>([]);
  const [saveWorkouts, setSaveWorkouts] = useState<Workout[]>([]);

  const SharedData = {
    addWorkouts,
    setAddWorkouts,
    saveWorkouts,
    setSaveWorkouts,
  };

  return (
    <workoutsContext.Provider value={SharedData}>
      {children}
    </workoutsContext.Provider>
  );
};

export default WorkoutProvider;