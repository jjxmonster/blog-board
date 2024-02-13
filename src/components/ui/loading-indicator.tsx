import { Loader2 } from "lucide-react";
export const LoadingIndicator = () => {
	return (
		<div className="flex w-full items-center justify-center gap-2 py-32">
			<Loader2 size={15} className="animate-spin text-gray-400" />{" "}
			<span className="text-sm text-gray-400"> Loading...</span>
		</div>
	);
};
