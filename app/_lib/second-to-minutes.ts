export function secondsToMinutes(input: number | string): string {
  const seconds = Number(input);

  if (isNaN(seconds) || seconds < 0) return "0:00";

  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}
