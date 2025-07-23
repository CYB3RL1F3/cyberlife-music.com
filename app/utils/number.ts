
export const isDecimal = (value: number) => {
  return value % 1 !== 0;
}
  
export const toFixed = (value?: number | null, precision = 2) => {
  if (!value) return '0';
  if (isDecimal(value)) {
    return value.toFixed(precision);
  }

  return value.toString();
}
