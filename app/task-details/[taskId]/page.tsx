"use client";

import Loader from "@/app/loading";
import { ITask } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import taskImage from "@/public/task2.jpg";
import { Copy, MoveLeft } from "lucide-react";
import NotFound from "@/app/not-found";
export default function TaskDetails() {
    const [task, setTask] = useState<ITask | null>(null);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const id = params.taskId;

    const fetchTask = async () => {
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/todos/${id}`
            );
            if (!response.ok) {
                notFound();
            }
            const taskData: ITask = await response.json();
            const priorities: ITask["priority"][] = ["High", "Medium", "Low"];
            const randomPriority =
                priorities[Math.floor(Math.random() * priorities.length)];
            const extendedTaskData: ITask = {
                ...taskData,
                priority: randomPriority
            };
            setTask(extendedTaskData);
        } catch (error) {
            toast.error(String(error));
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTask();
    }, [id]);

    const copyTitleToClipboard = async () => {
        if (task) {
            try {
                await navigator.clipboard.writeText(task.title);
                toast.success("Task title copied to clipboard!", {
                    style: {
                        background: "#4BB543",
                        color: "#ffff",
                        fontSize: "20px"
                    }
                });
            } catch (error) {
                toast.error(String(error));
            }
        }
    };

    if (loading) {
        return <Loader />;
    }

    if (!task) {
        return <NotFound />;
    }

    const priorityStyles = {
        High: "text-red-800",
        Medium: "text-yellow-800",
        Low: "text-green-800"
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-8">
            <h2 className="font-merienda mb-6 text-center text-4xl font-semibold text-gray-800">
                Task Details
            </h2>
            <div className="card w-96 rounded-2xl border border-gray-200 bg-white shadow-lg">
                <div className="h-48 overflow-hidden rounded-t-2xl">
                    <Image
                        src={taskImage}
                        alt="Task Image"
                        className="h-full w-full object-cover"
                        width={384}
                        height={192}
                    />
                </div>
                <div className="card-body p-6">
                    <p className="rounded-2xl p-2 text-lg font-medium text-gray-700 shadow">
                        <span className="text-2xl font-bold text-sky-950">
                            ID :
                        </span>{" "}
                        {task.id}
                    </p>
                    <p className="rounded-2xl p-2 text-lg font-bold text-gray-700 shadow">
                        <span className="text-2xl font-semibold text-sky-950">
                            Title :
                        </span>{" "}
                        {task.title}
                    </p>
                    <div className="flex items-center gap-4 rounded-2xl p-2 shadow">
                        <p
                            className={`flex-1 text-lg font-medium ${
                                task.completed
                                    ? "text-green-600"
                                    : "text-orange-600"
                            }`}
                        >
                            <span className="text-2xl font-bold text-sky-950">
                                Status :
                            </span>{" "}
                            {task.completed ? "Completed" : "Pending"}
                        </p>
                        <Image
                            src={
                                task.completed
                                    ? "/checkmark.png"
                                    : "/pending.png"
                            }
                            alt={task.completed ? "Completed" : "Pending"}
                            width={24}
                            height={24}
                            className="h-6 w-6"
                        />
                    </div>
                    <div
                        className={`rounded-2xl p-2 text-lg font-bold shadow ${priorityStyles[task.priority]}`}
                    >
                        <span className="text-2xl font-semibold text-sky-950">
                            Priority :
                        </span>{" "}
                        {task.priority}
                    </div>
                    <button
                        onClick={copyTitleToClipboard}
                        className="mt-4 flex transform cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 via-rose-500 to-pink-500 px-6 py-3 text-lg font-semibold text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                    >
                        <Copy color="#ffffff" />
                        Copy Title
                    </button>
                    <div className="card-actions mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-700 via-sky-600 to-blue-400 px-5 py-3 transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-90 hover:shadow-lg">
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-lg font-medium text-white"
                        >
                            <MoveLeft color="#ffffff" />
                            Back to Tasks
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
