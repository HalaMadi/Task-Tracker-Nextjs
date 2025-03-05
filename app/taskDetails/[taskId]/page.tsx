"use client";
import Loader from "@/components/Loader";
import { ITask } from "@/types/type";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function TaskDetails() {
  const [task, setTask] = useState<ITask | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  
  const fetchTask = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      const taskData: ITask = await response.json();
      setTask(taskData);
    } catch (error) {
      console.error("Error fetching task details:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchTask();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (!task) {
    return <div>Task not found</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 p-8">
      <div className="card bg-white w-96 shadow-lg rounded-2xl border border-gray-200">
        <div className="card-body p-6">
          <h2 className="text-center text-4xl font-semibold text-gray-800 mb-6">
            Task Details
          </h2>
          <p className="font-medium text-lg text-gray-700">
            <span className="text-gray-900 font-semibold">Title:</span> {task.title}
          </p>
          <p className="font-medium text-lg text-gray-700">
            <span className="text-gray-900 font-semibold">ID:</span> {task.id}
          </p>
          <p
            className={`font-medium text-lg ${
              task.completed ? "text-green-600" : "text-orange-600"
            }`}
          >
            <span className="text-gray-900 font-semibold">Status:</span>
            {task.completed ? "Completed" : "Pending"}
          </p>
          <div className="card-actions mt-6">
            <Link
              href="/"
              className="btn bg-blue-500 hover:bg-blue-600 text-white font-medium px-5 py-2.5 rounded-lg transition-all duration-300 ease-in-out w-full text-center"
            >
              Back to Tasks
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
}
