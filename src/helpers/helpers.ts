export function shuffleArray<T>(array: T[]): T[] {
  const arrayCopy = [...array];
  for (let i = arrayCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
  }
  return arrayCopy;
}

export function arrayMoveEl<T>(
  array: T[],
  fromIndex: number,
  toIndex: number
): T[] {
  const arrayCopy = [...array];
  const element = arrayCopy[fromIndex];

  arrayCopy.splice(fromIndex, 1);
  arrayCopy.splice(toIndex, 0, element);

  return arrayCopy;
}
