export function TableHeader() {
	return (
		<thead>
			<tr className="font-bold uppercase">
				<th className="rounded-tl-lg bg-primary px-3.5 py-4 text-left font-medium text-white">
					Foto
				</th>
				<th className="bg-primary py-4 text-left font-medium text-white">
					Nome
				</th>
				<th className="rounded-tr-lg bg-primary px-3.5 py-4 text-left font-medium text-white">
					<span className="m-auto block aspect-square w-2 rounded-full bg-white" />
				</th>
			</tr>
		</thead>
	);
}
