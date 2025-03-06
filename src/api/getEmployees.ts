import type { Employee } from "../@types/employee";

export async function getEmployees() {
	const response = await fetch("http://localhost:3000/employees");
	const employees = await response.json();
	return employees as Employee[];
}
