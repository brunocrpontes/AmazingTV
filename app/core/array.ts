export function groupBy<T, PF extends (item: T) => NonNullable<any>, R extends ReturnType<PF> = ReturnType<PF>>(array: T[], picker: PF): T[][] {
  const map = array.reduce((map, item) => {
    const key = picker(item);

    if (!map.has(key)) {
      map.set(key, [item]);

      return map;
    }

    const group = map.get(key)!
    map.set(key, group.concat(item));

    return map;
  }, new Map<R, T[]>())

  return Array.from(map.values());
}