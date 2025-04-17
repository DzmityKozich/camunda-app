export const filterToQueryParams = (filter: object): string => {
  return new URLSearchParams(filter as any).toString();
};

export const startOfDay = (day: string | Date | number): string => {
  const date = new Date(day);
  date.setHours(0, 0, 0, 0);
  return date.toISOString();
};

export const getFullDay = (day: string | Date | number): string => {
  const date = new Date(day).toISOString();
  return date.split('T')[0];
};

export const toJavaDate = (date: string): string => {
  const withoutTZ = new Date(date).toISOString().slice(0, -1);
  return `${withoutTZ}+0000}`;
};
