import Image from "next/image";
import ActivityForm from "../components/form/activity-form";

export default function Home() {
  return (
    <div className="flex justify-center items-center p-4">
      <ActivityForm></ActivityForm>
    </div>
  );
}
