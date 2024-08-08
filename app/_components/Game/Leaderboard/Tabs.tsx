import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Id } from "@/convex/_generated/dataModel";

type Props = {
  data:
    | {
        _id?: Id<"Leaderboard">;
        name: string;
        time: string;
        difficulty: string;
        _creationTime?: number;
      }[]
    | undefined;
};

export function LeaderboardTabs({ data }: Props) {
  const filterAndSortData = (difficulty: string) => {
    if (!data) return [];
    return data
      .filter((entry) => entry.difficulty === difficulty)
      .sort((a, b) => parseFloat(a.time) - parseFloat(b.time))
      .slice(0, 50); // Get top 10
  };

  const renderLeaderboard = (difficulty: string) => {
    const filteredData = filterAndSortData(difficulty);
    return (
      <div className="mt-4 h-[80vh] w-full overflow-y-auto no-scrollbar">
        <table className=" w-full">
          <thead>
            <tr className="text-center">
              <th className="w-1/4">Rank</th>
              <th className="w-2/4">Name</th>
              <th className="w-1/4">Time</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((entry, index) => (
              <tr className="text-center font-mono truncate" key={index}>
                <td className="w-1/4">{index + 1}</td>
                <td className="w-2/4">{entry.name}</td>
                <td className="w-1/4">{entry.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <Tabs defaultValue="easy" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="easy">Easy</TabsTrigger>
        <TabsTrigger value="medium">Medium</TabsTrigger>
        <TabsTrigger value="hard">Hard</TabsTrigger>
      </TabsList>
      <TabsContent
        className="w-[320px] sm:w-[450px] flex justify-center"
        value="easy"
      >
        {renderLeaderboard("easy")}
      </TabsContent>
      <TabsContent className="w-[320px] sm:w-[450px]" value="medium">
        {renderLeaderboard("medium")}
      </TabsContent>
      <TabsContent className="w-[320px] sm:w-[450px]" value="hard">
        {renderLeaderboard("hard")}
      </TabsContent>
    </Tabs>
  );
}
