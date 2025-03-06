import type { HTMLProps } from "react";
import SearchIcon from "../../assets/search-icon.svg";

type InputProps = {} & HTMLProps<HTMLInputElement>;

export function Input({ ...props }: InputProps) {
	return (
		<div className="flex justify-between rounded-lg border-2 border-gray-300 bg-white px-4 py-3.5 font-normal text-base">
			<input
				className="flex-1 placeholder:text-base placeholder:text-gray-300"
				{...props}
			/>
			<img src={SearchIcon} alt="icone de lupa" />
		</div>
	);
}
