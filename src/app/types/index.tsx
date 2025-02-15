export interface Activity {
  activity: string;
  price: number;
  type:
    | "education"
    | "recreational"
    | "social"
    | "diy"
    | "charity"
    | "cooking"
    | "relaxation"
    | "music"
    | "busywork";
  bookingRequired: boolean;
  accessibility: number;
}

export interface ActivityListProps {
  activities: Activity[];
}

export interface ActivityFormProps {
  onAddActivity: (activity: Activity) => void;
}
