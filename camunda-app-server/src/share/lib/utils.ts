export const filterToQueryParams = (filter: object): string => {
  return new URLSearchParams(filter as any).toString();
};
