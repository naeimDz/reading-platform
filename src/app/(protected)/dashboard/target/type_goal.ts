// Define types for your goal
interface Goal {
    id: number;
    title: string;
    progress: number;
    total: number;
    streak: number;
    type: 'current' | 'completed';
    category: string;
    icon: JSX.Element;
    progressColor: string;
    description: string;
  }