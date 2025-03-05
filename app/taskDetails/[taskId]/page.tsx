"use client";
import { ITask } from "@/types/type";
import { notFound } from "next/navigation";
import React, { useEffect, useState } from "react";

interface IProps {
  params: { id: string };
}
const TaskDetails = ({ params }: IProps) => {
  const [task, setTask] = useState<ITask | null>(null);
  const taskDetails = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${params.id}`
    );
    const taskData = await response.json();
    setTask(taskData);
  };
  useEffect(() => {
    taskDetails();
  }, []);

  if (!task) {
    return <div>Task not found</div>;
  }

  return (
    <div>
      <h2>Task ID: {task.id}</h2>
      <h3>Task Title :{task.title}</h3>
      <h4>Task Status:{task.completed?"Completed":"Pending"}</h4>
    </div>
  );
};

export default TaskDetails;
