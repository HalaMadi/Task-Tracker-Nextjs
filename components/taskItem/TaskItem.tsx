import { ITask } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProps {
  task: ITask;
}

const TaskItem = ({ task }: IProps) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200">
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0">
          <Image
            src={task.completed ? "/checkmark.png" : "/pending.png"}
            alt={task.completed ? "Completed" : "Pending"}
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </div>
        <div className="flex-1">
          <p className="font-medium text-gray-800">{task.title}</p>
          <p
            className={`text-sm ${
              task.completed ? "text-green-600" : "text-yellow-600"
            }`}
          >
            {task.completed ? "Completed" : "Pending"}
          </p>
        </div>
      </div>
      <Link
        href={`/taskDetails/${task.id}`}
        className="text-blue-500 hover:font-medium flex items-center gap-2"
      >
        <span>🔍</span>
        <span>View Details</span>
      </Link>
    </div>
  );
};

export default TaskItem;
