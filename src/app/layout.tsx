import type { Metadata } from "next";
import { siteConfig } from "@/config";
import "./globals.css";
import { Navbar } from "@/views/nav-bar";
import Providers from "./providers";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
	title: siteConfig.title,
	description: siteConfig.description,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="dark bg-black">
				<Toaster richColors position="top-center" />
				<Providers>
					<Navbar />
					<main className="mx-auto max-w-5xl pt-20">{children}</main>
				</Providers>
			</body>
		</html>
	);
}
