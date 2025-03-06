import { useEffect, useState } from "react";
import logo from "./assets/logo.svg";
import { Input } from "./components/input";

import type { Employee } from "./@types/employee";
import { getEmployees } from "./api/getEmployees";
import { TableDesktop } from "./components/table-desktop";
import { TableMobile } from "./components/table-mobile";

function App() {
	const [employees, setEmployees] = useState<Employee[]>([]);
	const [searchTerm, setSearchTerm] = useState("");

	const filteredEmployees = employees.filter(
		(employee) =>
			employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			employee.job.toLowerCase().includes(searchTerm.toLowerCase()) ||
			employee.phone.includes(searchTerm),
	);

	useEffect(() => {
		(async () => {
			const employees = await getEmployees();
			if (employees.length === 0) return;
			setEmployees(employees);
		})();
	}, []);

	return (
		<>
			<header className="z-10 flex w-screen items-center justify-start bg-white px-5 py-5.5 shadow-small">
				<img src={logo} alt="logo" />
			</header>

			<main className="flex h-full w-full flex-1 flex-col justify-start gap-8 bg-gray-100 px-5.5 py-6">
				<section className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
					<label
						className="font-medium text-xl md:flex-1 md:text-xl"
						htmlFor="funcionarios"
					>
						Funcionários
					</label>
					<Input
						id="funcionarios"
						type="type"
						placeholder="Pesquisar"
						onChange={(e) => {
							setSearchTerm(e.currentTarget.value);
						}}
					/>
				</section>

				{/* Desktop Table */}
				<TableDesktop employees={filteredEmployees} />
				{/* Mobile Table */}
				<TableMobile employees={filteredEmployees} />
			</main>
		</>
	);
}

export default App;
