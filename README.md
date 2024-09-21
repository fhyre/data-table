## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the results and table.

## Future improvements and tradeoffs

Starting this project, I noticed the strict 3-hour time limit, which pushed me to think quickly and prioritize working fast. I styled the table as closely as possible to the original video, with a few adjustments. Given more time, I would have refined the styling further and added my own creative touches.

My past experience with tables that require sorting by ascending and descending allowed me to implement the sorting feature pretty quickly before adding some additional styling. For the scoring algorithm, I used AI to help me create an algorithm due to time constraints. With more time, I would have done my own research on and implemented a scoring algorithm that best fits the dataset.

When choosing tools, I opted for TailwindCSS because it allows me to write CSS quickly and efficiently. Aside from TailwindCSS and an icon package, the project was completed without relying on additional external libraries.

In a real world environment, it is likely to not receive the entire data all at once. In which case, the API would have to implement a pagination and the client will have to handle caching, but in my case the dataset was rather small and I did the pagination manually on the server side before sending that data to the client.
