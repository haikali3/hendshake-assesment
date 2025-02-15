"use client";
import ActivityForm from "../components/form/activity-form";
import ActivityList from "@/components/activity-list";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Activity } from "@/app/types";

export default function Home() {
  const [activities, setActivities] = useState<Activity[]>([]);

  // Callback to add a new activity to the list
  const handleAddActivity = (activity: Activity) => {
    setActivities((prev) => [...prev, activity]);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center p-4">
        <ActivityForm onAddActivity={handleAddActivity} />
        <Separator className="m-4" />
        <ActivityList activities={activities} />
      </div>
    </>
  );
}
