import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default async function Home() {
	return (
		<div className="flex w-full flex-col items-center justify-center gap-10">
			<h1 className="text-center text-6xl font-bold">
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
		</div>
	);
}
