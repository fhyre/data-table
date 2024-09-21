export class TableDataMapping {
  static url = { key: "url", label: "URL" };
  static totalCount = { key: "totalCount", label: "TOTAL" };
  static totalVisitorCount = { key: "totalVisitorCount", label: "VISITORS" };
  static bounceCount = { key: "bounceCount", label: "BOUNCE" };
  static startsWithCount = { key: "startsWithCount", label: "ENTERS" };
  static endsWithCount = { key: "endsWithCount", label: "EXITS" };
  static avgScrollPercentage = { key: "avgScrollPercentage", label: "SCROLL" };
  static totalPageviewCount = { key: "totalPageviewCount", label: "PAGEVIEWS" };
  static score = { key: "score", label: "SCORE" };

  static get dataMapping() {
    const baseStyling = "text-center px-6 py-5";

    return new Map([
      [
        this.url.key,
        {
          heading: this.url.label,
          postfix: "",
          colStyle: `${baseStyling} !text-left break-words max-w-[500px]`,
        },
      ],
      [
        this.score.key,
        { heading: this.score.label, postfix: "%", colStyle: baseStyling },
      ],
      [
        this.avgScrollPercentage.key,
        {
          heading: this.avgScrollPercentage.label,
          postfix: "%",
          colStyle: baseStyling,
        },
      ],
      [
        this.bounceCount.key,
        {
          heading: this.bounceCount.label,
          postfix: "",
          colStyle: baseStyling,
        },
      ],
      [
        this.startsWithCount.key,
        {
          heading: this.startsWithCount.label,
          postfix: "",
          colStyle: baseStyling,
        },
      ],
      [
        this.endsWithCount.key,
        {
          heading: this.endsWithCount.label,
          postfix: "",
          colStyle: baseStyling,
        },
      ],
      [
        this.totalPageviewCount.key,
        {
          heading: this.totalPageviewCount.label,
          postfix: "",
          colStyle: baseStyling,
        },
      ],
      [
        this.totalVisitorCount.key,
        {
          heading: this.totalVisitorCount.label,
          postfix: "",
          colStyle: baseStyling,
        },
      ],
      [
        this.totalCount.key,
        {
          heading: this.totalCount.label,
          postfix: "",
          colStyle: baseStyling,
        },
      ],
    ]);
  }
}
