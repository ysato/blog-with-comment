export function absoluteUrl(path: string) {
  const protocol: string = process.env.APP_PROTOCOL as string;
  const host: string = process.env.VERCEL_URL as string;
  return `${protocol}//${host}${path}`;
}
