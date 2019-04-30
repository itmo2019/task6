/* Returns result in ms */
export function getRandomTimeout(min: number, max: number): number {
  return Math.floor(min + Math.random() * Math.floor(max - min));
}
