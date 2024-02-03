import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const LandingHeader = () => {
	return (
		<>
			<h1 className="text-center text-5xl font-bold md:text-6xl">
				Your space to share your passion
			</h1>
			<div className="flex gap-5">
				<Badge className="px-3 py-2" variant="outline">
					Create
				</Badge>
				<Badge className="px-3 py-2" variant="outline">
					Learn
				</Badge>
				<Badge className="px-3 py-2" variant="outline">
					Enjoy
				</Badge>
			</div>
			<Button className="px-8 py-6 text-lg" variant="default">
				Start now
			</Button>
		</>
	);
};
