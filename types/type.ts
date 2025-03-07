export interface ITask {
    id: number;
    title: string;
    completed: boolean;
    priority: "High" | "Medium" | "Low";
}
