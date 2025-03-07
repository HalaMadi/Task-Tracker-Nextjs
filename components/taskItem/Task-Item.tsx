import { ITask } from "@/types/type";
import { FolderSearch } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProps {
    task: ITask;
}
const TaskItem = ({ task }: IProps) => {
    return (
        <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow duration-200 hover:shadow-md">
            <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                    <Image
                        src={task.completed ? "/checkmark.png" : "/pending.png"}
                        alt={task.completed ? "Completed" : "Pending"}
                        width={24}
                        height={24}
                        className="h-6 w-6"
                    />
                </div>
                <div className="flex-1">
                    <p className="font-medium text-gray-800">{task.title}</p>
                    <p
                        className={`text-sm ${
                            task.completed
                                ? "text-green-600"
                                : "text-yellow-600"
                        }`}
                    >
                        {task.completed ? "Completed" : "Pending"}
                    </p>
                </div>
            </div>
            <Link
                href={`/task-details/${task.id}`}
                className="flex items-center gap-2 text-blue-500 hover:font-medium"
            >
                <div className="tooltip" data-tip="View Details">
                    <span>
                        <FolderSearch color="#3b4d81" />
                    </span>
                </div>
            </Link>
        </div>
    );
};

export default TaskItem;
