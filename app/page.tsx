import TaskItem from "@/components/taskItem/TaskItem";
import { ITask } from "@/types/type";
import React from "react";

const Home = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );
  const data: ITask[] = await response.json();
  return (
  <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-3xl mx-auto">
    <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
      Task Tracker
    </h1>
    <ul className="space-y-4">
      {data.map((task) => (
        <li key={task.id}>
          <TaskItem task={task} />
        </li>
      ))}
    </ul>
  </div>
</main>
  );
};

export default Home;
