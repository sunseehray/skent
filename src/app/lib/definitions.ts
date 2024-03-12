export type User = {
    user_id: number;
    username: string;
    points: number;
    password: string;
    image: string;
};

export type Task = {
    task_id: number,
    task_name: string,
    task_description: string,
    task_value: number,
    task_icon: string
};

export type Assignment = {
    assign_id: number,
    task_id: number,
    user_id: number
};