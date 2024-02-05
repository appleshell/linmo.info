import { twMerge } from "tailwind-merge";
import cx from "classix";

export const cn = (...args: any[]) => twMerge(cx(...args));
