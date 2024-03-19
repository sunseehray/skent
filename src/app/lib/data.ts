import { sql } from "@vercel/postgres";
import { User, Assignment, Task } from "./definitions";

export async function fetchUsers() {
    try {
        const data = await sql<User>`SELECT * FROM skent.user`;
        return data.rows;
    } catch(error) {
        throw new Error('Failed to fetch users data.');
    }
}

export async function fetchUserById(id: number) {
    try {
        const data = await sql<User>`SELECT * FROM skent.user WHERE user_id = ${id}`;
        return data.rows[0];
    } catch(error) {
        throw new Error('Failed to fetch user data.');
    }
}

export async function fetchAssignmentsByUser(user_id: number) {
    try {
        const data = await sql<any>`SELECT t.task_icon, t.task_name, t.task_description, t.task_value, a.assign_id FROM skent.task t INNER JOIN skent.assignment a ON t.task_id = a.task_id INNER JOIN skent.user u ON u.user_id = a.user_id WHERE u.user_id = ${user_id}`;
        return data.rows;
    } catch(error) {
        throw new Error('Failed to fetch user assignments.')
    }
}

export async function fetchAssignmentById(assign_id: number) {
    try {
        const data = await sql<Task>`SELECT t.task_icon, t.task_name, t.task_description, t.task_value FROM skent.task t INNER JOIN skent.assignment a ON t.task_id = a.task_id INNER JOIN skent.user u ON u.user_id = a.user_id WHERE a.assign_id = ${assign_id}`;
        return data.rows[0];
    } catch(error) {
        throw new Error('Failed to fetch assignment by ID.');
    }
}