import { DataTable } from "./components/data-table";
import _json from "./static/pages.json";
import { HockeyStackData } from "./types";

const weights = {
  totalCount: 0.2,
  totalVisitorCount: 0.2,
  bounceCount: 0.1,
  startsWithCount: 0.1,
  endsWithCount: 0.1,
  avgScrollPercentage: 0.2,
  totalPageviewCount: 0.1,
};

export default function Home() {
  const parsedData = Object.values(_json).map(
    (data: Omit<HockeyStackData, "score">) => {
      const {
        bounceCount,
        startsWithCount,
        endsWithCount,
        avgScrollPercentage,
        totalPageviewCount,
        totalVisitorCount,
        totalCount,
      } = data;

      const normalizedTotalCount = Math.min(totalCount / 1000, 1);
      const normalizedTotalVisitorCount = Math.min(totalVisitorCount / 1000, 1);
      const normalizedBounceCount = 1 - Math.min(bounceCount / 1000, 1);
      const normalizedStartsWithCount = Math.min(startsWithCount / 1000, 1);
      const normalizedEndsWithCount = Math.min(endsWithCount / 1000, 1);
      const normalizedAvgScrollPercentage = avgScrollPercentage / 100;
      const normalizedTotalPageviewCount = Math.min(
        totalPageviewCount / 1000,
        1,
      );

      const score =
        weights.totalCount * normalizedTotalCount +
        weights.totalVisitorCount * normalizedTotalVisitorCount +
        weights.bounceCount * normalizedBounceCount +
        weights.startsWithCount * normalizedStartsWithCount +
        weights.endsWithCount * normalizedEndsWithCount +
        weights.avgScrollPercentage * normalizedAvgScrollPercentage +
        weights.totalPageviewCount * normalizedTotalPageviewCount;

      return {
        score: Math.round(score * 100),
        ...data,
      } as HockeyStackData;
    },
  );

  const paginatedData: HockeyStackData[][] = [];

  const pageSize = 10;

  for (let i = 0; i < parsedData.length; i += pageSize) {
    paginatedData.push([...parsedData.slice(i, i + pageSize)]);
  }

  return (
    <div className="mx-auto flex h-full w-full min-w-[300px] max-w-[1200px] flex-col items-center justify-center gap-6 p-6">
      <DataTable data={paginatedData} />
    </div>
  );
}
