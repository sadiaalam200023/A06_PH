
import WorkoutDetails from "@/components/WorkoutDetails";

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

const getWorkouts = async (): Promise<Workout[]> => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/fitlog"
  );

  const data = await res.json();

  return data;
};

interface IWorkoutProps {
  params: Promise<{
    id: string;
  }>;
}

const WorkoutDetailsPage = async ({ params }: IWorkoutProps) => {
  const { id } = await params;

  const workoutData = await getWorkouts();

  const workout = workoutData.find(
    (workout) => workout.id === Number(id)
  );

  if (!workout) {
    return <div>Workout not found</div>;
  }

  return <WorkoutDetails workout={workout} />;
};

export default WorkoutDetailsPage;