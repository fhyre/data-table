import { TableDataMapping } from "../static/table-data-mapping";
import { HockeyStackData, TableSort } from "../types";

type tableSortProps = {
  a: HockeyStackData;
  b: HockeyStackData;
  filter: TableSort;
};

export const tableSort = ({ a, b, filter }: tableSortProps) => {
  const filterDirection = filter.direction;

  let compA: string | number, compB: string | number;
  if (filterDirection === "asc") {
    compA = a[filter.key];
    compB = b[filter.key];
  } else {
    compA = b[filter.key];
    compB = a[filter.key];
  }

  switch (filter.key) {
    case TableDataMapping.url.key:
      compA = compA as string;
      compB = compB as string;

      if (compA.length === compB.length) return 1;

      return compA.length < compB.length ? -1 : 1;
    default:
      return (compA as number) - (compB as number);
  }
};
