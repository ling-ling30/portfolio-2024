import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LeaderboardTabs } from "./Tabs";
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
export function LeaderboardSheet({ data }: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"sm"} variant="outline">
          Leaderboard
        </Button>
      </SheetTrigger>
      <SheetContent className="">
        <SheetHeader>
          <SheetTitle>Leaderboard</SheetTitle>
        </SheetHeader>
        <div className="h-full pb-10">
          <LeaderboardTabs data={data} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
