import { auth } from '@clerk/nextjs/server';
import DashboardCard from '../components/DashboardCard';

export default async function DashboardPage() {
  const { userId } = auth();

  if (!userId) {
    return <div>Access Denied</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DashboardCard 
          title="Your Workouts" 
          description="View and manage your workout plans"
          link="/workouts"
        />
        <DashboardCard 
          title="Progress Tracker" 
          description="Track your fitness progress over time"
          link="/progress"
        />
        <DashboardCard 
          title="Nutrition Log" 
          description="Log and analyze your daily nutrition"
          link="/nutrition"
        />
        <DashboardCard 
          title="Profile Settings" 
          description="Update your personal information and preferences"
          link="/profile"
        />
      </div>
    </div>
  );
}