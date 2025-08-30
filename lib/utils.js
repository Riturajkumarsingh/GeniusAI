// Correct default import for clsx (issue #19)
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  // clsx expects a spread/array; passing rest args directly
  return twMerge(clsx(inputs));
}
