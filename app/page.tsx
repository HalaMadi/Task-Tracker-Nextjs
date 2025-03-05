import TaskItem from "@/components/taskItem/TaskItem";
import { ITask } from "@/types/type";
import React from "react";

const Home = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );
  const data: ITask[] = await response.json();
  return (
    <div className="">
      <h1 className="text-4xl font-bold mb-6">Task Tracker</h1>
      <ul className="">
        {data.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
