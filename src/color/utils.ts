// Model conversion methods and static constructors
// import convert from 'color-convert';

export function roundTo(number: number, places?: number | undefined) {
  return Number(number.toFixed(places));
}

export function roundToPlace(places: number | undefined) {
  return function (number: number) {
    return roundTo(number, places);
  };
}

export function maxfn(max: number) {
  return function (v: number) {
    return Math.max(0, Math.min(max, v));
  };
}

export function assertArray(value: ArrayLike<number>) {
  return Array.isArray(value) ? value : [value];
}

export function zeroArray(array: Array<any>, length: number) {
  for (let i = 0; i < length; i++) {
    if (typeof array[i] !== 'number') {
      array[i] = 0;
    }
  }

  return array;
}
