export const formatPhone = (phone: string): string => {
	// Remove todos os caracteres não numéricos
	const cleaned = phone.replace(/\D/g, "");

	if (cleaned.length === 13 && cleaned.startsWith("55")) {
		const ddd = cleaned.slice(2, 4);
		const subscriberNumber = cleaned.slice(4);

		if (subscriberNumber.length === 9) {
			const formattedNumber = `+55 (${ddd}) ${subscriberNumber.slice(0, 5)}-${subscriberNumber.slice(5)}`;
			return formattedNumber;
		}
	}

	if (cleaned.length === 12 && cleaned.startsWith("55")) {
		const ddd = cleaned.slice(2, 4);
		const subscriberNumber = cleaned.slice(4);

		if (subscriberNumber.length === 8) {
			const formattedNumber = `+55 (${ddd}) ${subscriberNumber.slice(0, 5)}-${subscriberNumber.slice(5)}`;
			return formattedNumber;
		}
	}

	return phone;
};

export const formatDate = (date: string) => {
	try {
		// Formato esperado: DD/MM/YYYY
		const d = new Date(date);
		return new Intl.DateTimeFormat("pt-BR").format(d);
	} catch (error) {
		console.error("Error formatting date:", error);
		return date;
	}
};
