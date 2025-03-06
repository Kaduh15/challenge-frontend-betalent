import type { Employee } from "../@types/employee";
import { env } from "../env";

const { VITE_API_URL } = env;

export async function getEmployees() {
	const response = await fetch(`${VITE_API_URL}/employees`);
	const employees = await response.json();
	return employees as Employee[];
}
