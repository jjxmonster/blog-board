import type { Metadata } from "next";
import { siteConfig } from "@/config";
import "./globals.css";
import { Navbar } from "@/views/navbar";
import Providers from "./providers";

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
				<Providers>
					<Navbar />
					<main className="mx-auto max-w-5xl pt-20">{children}</main>
				</Providers>
			</body>
		</html>
	);
}
