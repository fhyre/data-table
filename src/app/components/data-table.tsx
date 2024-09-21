"use client";

import { useMemo, useState } from "react";
import { TableDataMapping } from "../static/table-data-mapping";
import { HockeyStackData, SortDirections, TableSort } from "../types";
import { ChevronLeft, ChevronRight, ChevronUp } from "lucide-react";
import { tableSort } from "../utils";

type Props = {
  data: HockeyStackData[][];
};

export const DataTable = ({ data }: Props) => {
  const [page, setPage] = useState(0);
  const [filter, setFilter] = useState<TableSort | null>(null);

  const row = useMemo(() => data[page], [data, page]);
  const dataMapping = [...TableDataMapping.dataMapping.entries()];

  const pageNavigate = (type: "next" | "prev") => {
    if (type === "next") {
      if (page < data.length - 1) {
        setPage(page + 1);
      }
    } else if (type === "prev") {
      if (page > 0) {
        setPage(page - 1);
      }
    }
  };

  const handleTableSort = (key: keyof HockeyStackData) => {
    const sortDirections = ["desc", "asc"];

    let filterIndex = sortDirections.indexOf(filter?.direction as string);

    setFilter((prev) => {
      if (prev?.key !== key) filterIndex = -1;
      if (filterIndex === sortDirections.length - 1) return null;

      return {
        key,
        direction: sortDirections[filterIndex + 1] as SortDirections,
      };
    });
  };

  return (
    <>
      <header className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Pages</h1>
        <nav className="flex items-center justify-center gap-2">
          <button
            disabled={page === 0}
            className={`rounded-full p-1 transition-all duration-200 enabled:hover:bg-white enabled:hover:text-black disabled:text-gray-600`}
            onClick={() => pageNavigate("prev")}
          >
            <ChevronLeft size={16} />
          </button>
          <p className="w-6 text-center text-lg font-bold">{page + 1}</p>
          <button
            disabled={page === data.length - 1}
            className={`rounded-full p-1 transition-all duration-200 enabled:hover:bg-white enabled:hover:text-black disabled:text-gray-600`}
            onClick={() => pageNavigate("next")}
          >
            <ChevronRight size={16} />
          </button>
        </nav>
      </header>
      <div className="h-min max-h-[75%] w-full overflow-auto rounded-xl border border-white/20">
        <table className="w-full">
          <thead className="sticky top-0 z-[1] select-none bg-black/60 text-sm text-[#adacb5] backdrop-blur">
            <tr>
              {dataMapping.map(([key, { heading }], i) => {
                const currFilter = filter?.key === key;
                const filterDirection = filter?.direction;

                return (
                  <th
                    key={i}
                    className={`px-6 py-4 ${i === 0 ? "text-left" : "text-center"} ${currFilter ? "text-white" : ""} cursor-pointer transition-all duration-300 hover:text-white`}
                    onClick={() =>
                      handleTableSort(key as keyof HockeyStackData)
                    }
                  >
                    <div className="relative flex w-min items-center">
                      {heading}
                      {currFilter && (
                        <button
                          className={`absolute right-[-17px] transition-all duration-300 ${filterDirection === "asc" ? "" : "rotate-180"}`}
                        >
                          <ChevronUp size={14} />
                        </button>
                      )}
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {[...row]
              .sort((a, b) => {
                if (filter) {
                  return tableSort({ a, b, filter });
                }
                return 0;
              })
              .map((col, i) => {
                return (
                  <tr key={i}>
                    {dataMapping.map(([key, { colStyle, postfix }], j) => {
                      const currFilter = filter?.key === key;
                      const cell = col[key as keyof HockeyStackData];

                      return (
                        <td
                          key={j}
                          className={`${colStyle} ${currFilter ? "font-[600] brightness-150" : ""} ${i % 2 ? "bg-[#2d2c2e]" : "bg-[#202020]"} transition-all duration-300`}
                        >
                          {cell + postfix}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};
