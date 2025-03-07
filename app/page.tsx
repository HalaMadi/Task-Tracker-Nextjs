import TaskItem from "@/components/taskItem/Task-Item";
import { ITask } from "@/types/type";
import React from "react";

const Home = async () => {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    const data: ITask[] = await response.json();
    return (
        <main className="min-h-screen px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
                <h1 className="font-merienda my-8 text-center text-4xl font-semibold text-gray-800">
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
