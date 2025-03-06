import type { Employee } from "../../@types/employee";
import ChevronDown from "../../assets/chevron-down.svg";
import ChevronUp from "../../assets/chevron-up.svg";
import { EmployeeDetails } from "./EmployeeDetails";

type EmployeeRowProps = {
	employee: Employee;
	isExpanded: boolean;
	onToggle: () => void;
};

export function EmployeeRow({
	employee,
	isExpanded,
	onToggle,
}: EmployeeRowProps) {
	return (
		<>
			<tr
				className="cursor-pointer border-gray-200 border-b bg-white"
				onClick={onToggle}
				onKeyUp={(e) =>
					e.key === "Enter" || e.key === " " ? onToggle() : null
				}
				tabIndex={0}
			>
				<td className="w-1/3 px-3.5 py-4">
					<img
						src={employee.image}
						alt={employee.name}
						className="h-12 w-12 rounded-full"
					/>
				</td>
				<td className="w-1/3 py-4 text-start text-base">
					<p className="text-start font-normal">{employee.name}</p>
				</td>
				<td className="w-1/3 px-3.5 py-4">
					<img
						src={isExpanded ? ChevronUp : ChevronDown}
						alt="expand"
						className="m-auto aspect-square h-8"
					/>
				</td>
			</tr>
			{isExpanded && <EmployeeDetails employee={employee} />}
		</>
	);
}
