import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const BACKEND_URL = import.meta.env.VITE_POCKETBASE_URL;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toFormData(obj: Record<string, any>) {
  let formData = new FormData();
  for (let key in obj) {
    formData.append(key, obj[key]);
  }
  return formData;
}

export function toFileURL(id: string, avatar: string) {
  return BACKEND_URL + "/api/files/users/" + id + "/" + avatar;
}
