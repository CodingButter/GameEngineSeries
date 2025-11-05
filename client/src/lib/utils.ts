import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateRandomHexColor() {
  // Generate a random number between 0 and 16777215 (FFFFFF in decimal)
  const randomNumber = Math.floor(Math.random() * 16777215);
  // Convert the number to a hexadecimal string
  let hexColor = randomNumber.toString(16);
  // Pad the string with leading zeros if necessary to ensure 6 characters
  hexColor = hexColor.padStart(6, "0");
  // Prepend '#' and return the full hex color code
  return `#${hexColor.toUpperCase()}`;
}
