import Leaderboard from "@/components/leader-board";

export const metadata = {
  title: "Leaderboard - Cat Flip",
  description:
    "Check out the top scorers in Cat Flip! See who matched the most Cat pairs the fastest and claimed the top spot on the leaderboard.",
};

export default async function page() {
  return (
    <div className="flex flex-1 flex-col">
      <Leaderboard />
    </div>
  );
}
