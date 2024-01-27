import { Button } from "@/components/ui/button";
import { GithubButton } from "@/components/ui/github-button";
import { Input } from "@/components/ui/input";

export default function SignIn() {
	return (
		<section className="flex min-h-full pt-16 sm:py-28">
			<div className="mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6">
				<div className="relative mt-12 sm:mt-16">
					<h1 className="text-center text-2xl font-medium tracking-tight text-slate-200">
						Sign in to your account
					</h1>
				</div>
				<div className="sm:rounded-5xl -mx-4 mt-10 flex-auto px-4 py-10 shadow-2xl shadow-slate-900 sm:mx-0 sm:flex-none sm:p-24">
					<form>
						<div className="py-5">
							<Input type="text" placeholder="johndoe@example.com" />
						</div>
						<Button
							type="submit"
							variant="default"
							color="gray"
							className="mt-3 w-full"
						>
							Continue with email
						</Button>
					</form>
					<div className="mx-auto my-10 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
						or
					</div>
					<GithubButton />
				</div>
			</div>
		</section>
	);
}
