export function DetailRow({ label, value }: { label: string; value: string }) {
	return (
		<div className="flex justify-between border-b border-dotted">
			<p className="font-medium">{label}</p>
			<p>{value}</p>
		</div>
	);
}
