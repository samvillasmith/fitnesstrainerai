import Link from 'next/link';

interface DashboardCardProps {
  title: string;
  description: string;
  link: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, description, link }) => {
  return (
    <Link href={link} className="block p-4 md:p-6 bg-dark-surface rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-lg md:text-xl font-semibold mb-2 text-dark-primary">{title}</h2>
      <p className="text-sm md:text-base text-dark-on-surface opacity-80">{description}</p>
    </Link>
  );
};

export default DashboardCard;