import { formatDistanceToNowStrict } from "date-fns";

export function distanceToNow(dateTime: Date): string;
export function distanceToNow(dateTime: string): string;

export function distanceToNow(dateTime: Date | string): string {
  if (typeof dateTime === "string") {
    return formatDistanceToNowStrict(new Date(dateTime), { addSuffix: true });
  } else {
    return formatDistanceToNowStrict(dateTime, { addSuffix: true });
  }
}
