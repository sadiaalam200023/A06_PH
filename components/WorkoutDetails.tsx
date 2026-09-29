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
      <h1>{workout.name}</h1>
    </div>
  );
};

export default WorkoutDetails;

