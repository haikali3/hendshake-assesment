"use client";

import { ActivityListProps } from "@/app/types";
import * as React from "react";

const ActivityList: React.FC<ActivityListProps> = ({ activities }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold">Submitted Activities</h2>
      {activities.length > 0 ? (
        <ul className="space-y-4 mt-4">
          {activities.map((activity, index) => (
            <li key={index} className="p-4 border rounded-md">
              <p>
                <strong>Activity:</strong> {activity.activity}
              </p>
              <p>
                <strong>Price:</strong> {activity.price}
              </p>
              <p>
                <strong>Type:</strong> {activity.type}
              </p>
              <p>
                <strong>Booking Required:</strong>{" "}
                {activity.bookingRequired ? "Yes" : "No"}
              </p>
              <p>
                <strong>Accessibility:</strong>{" "}
                {activity.accessibility.toFixed(2)}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No activities submitted yet.</p>
      )}
    </div>
  );
};

export default ActivityList;
