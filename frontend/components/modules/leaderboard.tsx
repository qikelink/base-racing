import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import { getLeadershipBoard, MinterData } from "@/view-functions/getLeadershipBoard";


export const LeaderBoard = () => {
  const navigate = useNavigate();
  const { account } = useWallet();
  const [leadership, setLeadership] = useState<any>([]);

  const { data } = useQuery({
    queryKey: ["message-content", account?.address],
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

  const handleNavigate = () => {
    navigate("/leaderboard");
  };

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-400">RECENT LEARNERS</p>
        <div onClick={handleNavigate} className="flex items-center space-x-2 cursor-pointer">
          <p className="text-yellow-300">LEADERBOARD</p>
          <img src="/icons/front.svg" className="bg-yellow-300" />
        </div>
      </div>

      <div className="overflow-hidden h-64 relative">
        <div className="absolute inset-0 animate-scroll">
          {leadership.map((entry: MinterData, index: number) => (
            <div key={index}>
              <div className="flex justify-between items-center px-3 py-2">
                <div className="flex flex-col gap-1">
                  <Avatar>
                    <AvatarImage
                      className="w-8 h-8 rounded-full"
                      src={`https://api.dicebear.com/6.x/initials/svg?seed=${entry.addr}`}
                    />
                    <AvatarFallback>{entry.addr.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <p className="text-gray-400 text-sm">
                    Address:{" "}
                    <span className="text-gray-300">{`${entry.addr.slice(0, 6)}...${entry.addr.slice(-4)}`}</span>
                  </p>
                </div>
                <div className="flex space-x-2 items-center">
                  <img src="/icons/car.svg" className="h-8 w-8" alt="Turbo icon" />
                  <p className="text-sm font-semibold">
                    {(parseInt(entry.amount) / Math.pow(10, 8)).toLocaleString()} Turbos
                  </p>
                </div>
              </div>
              <Separator />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
