import { format } from "date-fns/format";

export const Footer = () => {
	return (
		<footer class="bg-gray-800 text-white p-4 text-center">
			© {format(new Date(), "yyyy")} Wino Mail
		</footer>
	);
};