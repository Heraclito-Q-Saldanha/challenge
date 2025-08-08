export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

export interface TaskData {
    title: string;
    description: string;
    priority: string;
    status: string;
    assignedTo: string;
    dueDate: string;
    createdAt: string;
}

export interface CreateTaskData {
    title: string;
    description: string;
    priority: string;
    status: string;
    tags: string[];
    assignedTo: string;
    dueDate: string;
    estimatedHours: number
}

export type EditTaskData = Partial<CreateTaskData>;

export async function getTasksRequest(skip: number = 0, limit: number = 10): Promise<TaskData[]> {
    const res = await fetch(`${API_URL}/tasks?skip=${skip}&limit=${limit}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });
    if (!res.ok)
        throw res;
    return res.json();
}

export async function createTaskRequest(data: CreateTaskData): Promise<TaskData> {
    const res = await fetch(`${API_URL}/tasks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
    if (!res.ok)
        throw res;
    return res.json();
}


export async function editTaskRequest(data: EditTaskData): Promise<TaskData> {
    const res = await fetch(`${API_URL}/tasks`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
    if (!res.ok)
        throw res;
    return res.json();
}