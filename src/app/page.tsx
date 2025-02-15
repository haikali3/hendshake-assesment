"use client";
import ActivityForm from "../components/form/activity-form";
import ActivityList from "@/components/activity-list";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import { Activity } from "@/app/types";

export default function Home() {
  const [activities, setActivities] = useState<Activity[]>([]);

  // 1. Add a new activity to the list.
  const handleAddActivity = (activity: Activity) => {
    setActivities((prev) => [...prev, activity]);
  };

  // 2. Remove an activity from the list.
  const handleDeleteActivity = (index: number) => {
    setActivities((prev) => prev.filter((_, i) => i !== index));
  };

  // 4. Load and store activities in localStorage.
  // Load stored activities from localStorage when the component mounts.
  useEffect(() => {
    const storedActivities = localStorage.getItem("activities");
    if (storedActivities) {
      setActivities(JSON.parse(storedActivities));
    }
  }, []);

  // Whenever the activities state changes, update localStorage.
  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(activities));
  }, [activities]);

  return (
    <>
      <div className="flex justify-center space-x-4 p-4">
        <a
          href="https://github.com/haikali3/hendshake-assesment"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://www.haikal.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Website
        </a>
        <a
          href="https://linkedin.com/in/haikaltahar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          LinkedIn
        </a>
      </div>
      <div className="flex flex-col justify-center items-center p-4">
        <ActivityForm onAddActivity={handleAddActivity} />
        <Separator className="m-4" />
        <ActivityList
          activities={activities}
          onDeleteActivity={handleDeleteActivity}
        />
      </div>
    </>
  );
}
