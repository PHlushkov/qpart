export interface DataCardProps {
  title: string;
  data: {
    id: number;
    name?: string;
    model?: string;
    location?: string;
    status?: string;
    lastMaintenance?: string;
    operator?: string;
    hoursWorked?: number;
    description?: string;
    date?: string;
    author?: string;
    details?: string;
    durationHours?: number;
    priority?: string;
  };
}
