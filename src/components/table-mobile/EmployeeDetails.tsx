import type { Employee } from "../../@types/employee";
import { formatDate, formatPhone } from "../../utils/format";
import { DetailRow } from "./DetailsRow";

export function EmployeeDetails({ employee }: { employee: Employee }) {
	return (
		<tr className="border-gray-200 border-b bg-white">
			<td colSpan={3} className="space-y-4 px-3.5 py-4">
				<DetailRow label="Cargo" value={employee.job} />
				<DetailRow
					label="Data de admissão"
					value={formatDate(employee.admission_date)}
				/>
				<DetailRow label="Telefone" value={formatPhone(employee.phone)} />
			</td>
		</tr>
	);
}
