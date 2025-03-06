import type { Employee } from "../../@types/employee";
import { formatDate, formatPhone } from "../../utils/format";

type TableDesktopProps = {
	employees: Employee[];
};

export function TableDesktop({ employees }: TableDesktopProps) {
	return (
		<table className="hidden md:block">
			<thead>
				<tr className="bg-primary text-white">
					<th className="rounded-tl-lg px-8 py-3.5 text-left">FOTO</th>
					<th className="px-8 py-3.5 text-left">NOME</th>
					<th className="px-8 py-3.5 text-left">CARGO</th>
					<th className="px-8 py-3.5 text-left">DATA DE ADMISSÃO</th>
					<th className="rounded-tr-lg px-8 py-3.5 text-left">TELEFONE</th>
				</tr>
			</thead>
			<tbody className="bg-white">
				{employees.map(({ id, image, name, job, admission_date, phone }) => (
					<tr key={id} className="border border-gray-100">
						<td className="px-8 py-3.5">
							<img
								className="m-auto aspect-square h-8.5 rounded-full"
								src={image}
								alt={`foto de ${name}`}
							/>
						</td>
						<td className="px-8 py-3.5">{name}</td>
						<td className="px-8 py-3.5">{job}</td>
						<td className="px-8 py-3.5">{formatDate(admission_date)}</td>
						<td className="px-8 py-3.5">{formatPhone(phone)}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
