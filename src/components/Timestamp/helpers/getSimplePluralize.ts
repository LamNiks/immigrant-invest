export const getSimplePluralize = (value: number, text: string) =>
  value === 1 ? text : `${text}s`;