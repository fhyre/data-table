export type HockeyStackData = {
  score: number;
  url: string;
  totalCount: number;
  totalVisitorCount: number;
  bounceCount: number;
  startsWithCount: number;
  endsWithCount: number;
  avgScrollPercentage: number;
  totalPageviewCount: number;
};

export type TableSort = {
  key: keyof HockeyStackData;
  direction: SortDirections;
};

export type SortDirections = "asc" | "desc";
