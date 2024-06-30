import Link from 'next/link';

const WorkoutsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-dark-primary">Workouts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <WorkoutCard 
          title="Cut Fat & Build Muscle"
          description="A balanced plan to simultaneously reduce body fat and increase muscle mass."
          link="/workouts/cut-and-build"
        />
        {/* Add more workout cards here as needed */}
      </div>
    </div>
  );
};

const WorkoutCard = ({ title, description, link }) => {
  return (
    <Link href={link} className="block p-6 bg-dark-surface rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold mb-2 text-dark-primary">{title}</h2>
      <p className="text-dark-on-surface opacity-80">{description}</p>
    </Link>
  );
};

export default WorkoutsPage;