const basePath = (process.env.NEXT_PUBLIC_BASE_PATH as string) || "";

export function addBasePath(path: string): string {
  return process.env.__NEXT_MANUAL_CLIENT_BASE_PATH
    ? path
    : `${basePath}${path}`;
}
