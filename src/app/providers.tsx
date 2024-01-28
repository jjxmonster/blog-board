"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

import { SessionProvider } from "next-auth/react";

export default function Providers({ children }: { children: React.ReactNode }) {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						staleTime: 4 * 1000,
						refetchInterval: 4 * 1000,
					},
				},
			}),
	);
	return (
		<SessionProvider>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</SessionProvider>
	);
}
