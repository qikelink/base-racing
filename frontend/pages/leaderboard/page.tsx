import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { toast } from "@/components/ui/use-toast";
import { getLeadershipBoard } from "@/view-functions/getLeadershipBoard";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export const LeaderboardPage = () => {
  const { account, connected } = useWallet();
  const [leadership, setLeadership] = useState<any>([]);
  const defaultAddress = "0xf53f275b01aed3c98e5cea0f4a97c29b75b3e6df268bfb5f0e6c2ea37dd46a81";

  const { data } = useQuery({
    queryKey: ["message-content", connected ? account?.address : defaultAddress],
    refetchInterval: 10_000,
    queryFn: async () => {
      try {
        const content = await getLeadershipBoard();
        return { content };
      } catch (error: any) {
        toast({
          variant: "destructive",
          title: "Error",
          description: error.toString(),
        });
        return { content: [[[]]] };
      }
    },
  });

  useEffect(() => {
    if (data && data.content[0] && data.content[0][0]) {
      setLeadership(data.content[0][0]);
    }
  }, [data]);

  // Find the current user's entry
  const userEntry = leadership.find((entry: any) => entry.addr === account?.address);

  return (
    <div className="flex flex-col gap-3 w-full">
      <div>
        <p className="text-xl">Leaderboard</p>
        <p className="text-base text-gray-400">Compete with friends to top the charts</p>
      </div>

      <div className="flex space-x-2 items-center my-4">
        <Button size={"sm"} variant={"ghost"} className="bg-yellow-200 active:bg-yellow-100 text-black rounded-full h-7">
          Last week
        </Button>
        <Button size={"sm"} variant={"ghost"} className="hover:bg-yellow-200 active:bg-yellow-100 rounded-full h-7">
          All time
        </Button>
      </div>

      {/* User Ranking Section */}
      <div className="space-y-3">
        <p>Your Ranking</p>
        {userEntry ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px] text-gray-300">Rank</TableHead>
                <TableHead className="text-gray-300">User</TableHead>
                <TableHead className="text-right text-gray-300">Knowledge Score</TableHead>
                <TableHead className="text-right text-gray-300">Streak</TableHead>
                <TableHead className="text-right text-gray-300">$Turbos</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">{leadership.indexOf(userEntry) + 1}</TableCell>
                <TableCell>
                  <Avatar>
                    <AvatarImage className="w-8 h-8 rounded-full" src={`https://api.dicebear.com/6.x/initials/svg?seed=${userEntry.addr}`} />
                    <AvatarFallback>{userEntry.addr.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="text-right">{(parseInt(userEntry.amount) / Math.pow(10, 8)).toLocaleString()}</TableCell>
                <TableCell className="text-right flex items-center justify-end space-x-1">
                  <img src="/icons/Fire.svg" className="w-6 h-6" alt="Streak icon" />
                  <p className="mt-1">{userEntry.streak}</p>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end space-x-1">
                    <img src="/icons/car.svg" className="w-6 h-6" alt="Turbo icon" />
                    <p className="mt-1">{(parseInt(userEntry.amount) / Math.pow(10, 8)).toLocaleString()}</p>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        ) : (
          <p className="text-gray-400">You are not ranked yet.</p>
        )}
      </div>

      {/* Overall Leaderboard Section */}
      <div className="space-y-3">
        <p>Overall Leaderboard</p>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-gray-300">Rank</TableHead>
              <TableHead className="text-gray-300">User</TableHead>
              <TableHead className="text-right text-gray-300">Knowledge Score</TableHead>
              <TableHead className="text-right text-gray-300">Streak</TableHead>
              <TableHead className="text-right text-gray-300">$Turbos</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leadership.map((entry: any, index: number) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>
                  <Avatar>
                    <AvatarImage className="w-8 h-8 rounded-full" src={`https://api.dicebear.com/6.x/initials/svg?seed=${entry.addr}`} />
                    <AvatarFallback>{entry.addr.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="text-right">{(parseInt(entry.amount) / Math.pow(10, 8)).toLocaleString()}</TableCell>
                <TableCell className="text-right flex items-center justify-end space-x-1">
                  <img src="/icons/Fire.svg" className="w-6 h-6" alt="Streak icon" />
                  <p className="mt-1">{entry.streak}</p>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end space-x-1">
                    <img src="/icons/car.svg" className="w-6 h-6" alt="Turbo icon" />
                    <p className="mt-1">{(parseInt(entry.amount) / Math.pow(10, 8)).toLocaleString()}</p>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default LeaderboardPage;
