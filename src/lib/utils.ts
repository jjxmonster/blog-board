import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function parseDate(date: string) {
	return dayjs(date).format("MMM DD, YYYY");
}
