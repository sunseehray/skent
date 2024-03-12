import { sql } from "@vercel/postgres";
import { User } from "./definitions";

export async function fetchUsers() {
    try {
        const data = await sql<User>`SELECT * FROM skent.user`;
        return data.rows;
    } catch(error) {
        throw new Error('Failed to fetch users data.');
    }
}