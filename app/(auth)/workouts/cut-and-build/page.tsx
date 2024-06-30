import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const CutAndBuildPlan = async () => {
  const workouts = await prisma.workout.findMany({
    where: {
      name: "Cut Fat & Build Muscle"
    },
    include: {
      exercises: {
        include: {
          exercise: true
        }
      }
    },
    orderBy: {
      week: 'asc'
    }
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-dark-primary">Cut Fat & Build Muscle Plan</h1>
      {workouts.length === 0 ? (
        <p className="text-dark-on-surface">No workouts found. Please check back later.</p>
      ) : (
        workouts.map((workout) => (
          <div key={workout.id} className="mb-8 bg-dark-surface p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-dark-primary">
              Week {workout.week} - {workout.dayOfWeek}
            </h2>
            <p className="mb-4 text-dark-on-surface">{workout.description}</p>
            <h3 className="text-lg font-semibold mb-2 text-dark-secondary">Exercises:</h3>
            <ul>
              {workout.exercises.map((we) => (
                <li key={we.id} className="mb-2 text-dark-on-surface">
                  <span className="font-medium">{we.exercise.name}</span>: {we.sets} sets, {we.reps} reps
                  {we.duration && `, Duration: ${we.duration} seconds`}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default CutAndBuildPlan;