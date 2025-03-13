import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTextEnum(text: string | null) {
  if (!text) return "Not Specified";
  return text
    .toLowerCase()
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export function checkExpiryDate(date: string): boolean {
  const expiryDate = new Date(date);
  const today = new Date();

  expiryDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  return expiryDate < today;
}

export function calStarReview(averageRating: number) {
  const fullStars = Math.floor(averageRating);
  const hasHalfStar = averageRating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  return { fullStars, hasHalfStar, emptyStars };
}

export function fallbackInitials(text: string) {
  return text
    ? text
        .split(" ")
        .map((s) => s[0].toUpperCase())
        .join("")
    : text
      ? text.charAt(0).toUpperCase()
      : "U";
}
