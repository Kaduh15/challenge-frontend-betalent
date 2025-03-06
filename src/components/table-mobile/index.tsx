import { useState } from "react";
import { EmployeeRow } from "./EmployeeRow";
import { TableHeader } from "./TableHeader";
import type { Employee } from "../../@types/employee";

type TableMobileProps = {
	employees: Employee[];
};

export function TableMobile({ employees }: TableMobileProps) {
	const [expandedEmployee, setExpandedEmployee] = useState<number | null>(null);

	// Alternar expansão da linha ao clicar
	const toggleExpand = (id: number) => {
		setExpandedEmployee((prev) => (prev === id ? null : id));
	};

	return (
		<table className="w-full md:hidden">
			<TableHeader />
			<tbody>
				{employees.map((employee) => (
					<EmployeeRow
						key={employee.id}
						employee={employee}
						isExpanded={expandedEmployee === employee.id}
						onToggle={() => toggleExpand(employee.id)}
					/>
				))}
			</tbody>
		</table>
	);
}
