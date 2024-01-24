import type { Metadata } from "next";
import { siteConfig } from "@/config";
import "./globals.css";

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
				<main>{children}</main>
			</body>
		</html>
	);
}
