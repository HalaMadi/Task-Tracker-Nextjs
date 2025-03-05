import { ITask } from "@/types/type";
import Image from "next/image";
import React from "react";

interface IProps {
  task: ITask;
}
const TaskItem = ({ task }: IProps) => {
  return (
    <div>
        <h4>{task.title}</h4>
      <div className="flex  items-center">
        <Image
          width={50}
          height={50}
          src={task.completed ? "/checkMark.png" : "/pending.png"}
          alt={task.completed ? "completed" : "pending"}
        />
        <p>{task.completed ? "Completed" : "Pending"}</p>
      </div>
    </div>
  );
};

export default TaskItem;
