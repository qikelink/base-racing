import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Progress } from "../ui/progress";
import { useNavigate } from "react-router-dom";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { toast } from "../ui/use-toast";
import { getTokenBalance } from "@/view-functions/getTokenBalance";

export const Competitor = () => {
  const { account } = useWallet();
  const navigate = useNavigate();
  const [tkBalance, setTkBalance] = useState<number>(0);
  const MODULE_START_POINTS = 40; // Starting points for module 2
  const POINTS_PER_LEVEL = 10;

  const { data } = useQuery({
    queryKey: ["apt-balance", account?.address],
    refetchInterval: 10_000,
    queryFn: async () => {
      try {
        if (!account) {
          console.warn("Account not available");
          return { balance: 0 };
        }

        const balance = await getTokenBalance({ accountAddress: account.address });
        return { balance };
      } catch (error: any) {
        return { balance: 0 };
      }
    },
  });

  useEffect(() => {
    if (data) {
      setTkBalance(data.balance);
    }
  }, [data]);

  const handleNavigate = (levelIndex: number, module: string, level: string, title: string, description: string) => {
    if (turboBalance < MODULE_START_POINTS + (levelIndex * POINTS_PER_LEVEL)) {
      toast({
        variant: "destructive",
        title: "Level Locked",
        description: "Please complete the previous level before moving on to this level.",
      });
    } else if (turboBalance >= MODULE_START_POINTS + ((levelIndex + 1) * POINTS_PER_LEVEL)) {
      toast({
        variant: "destructive",
        title: "Level Already Completed",
        description: "Level has already been completed, please move on to the next level.",
      });
    } else {
      navigate("/level", { state: { module, level, title, description } });
    }
  };

  const handleHome = () => {
    navigate(-1);
  };

  const turboBalance = tkBalance / Math.pow(10, 8);
  const levels = [
    {
      module: "module2",
      level: "level1",
      title: "DeFi Protocol Fundamentals",
      description:
        "Understand core DeFi concepts including Automated Market Makers (AMMs), impermanent loss, and flash loans, building a foundation for decentralized finance development.",
      points: 10,
    },
    {
      module: "module2",
      level: "level2",
      title: "Cross-Chain Integration",
      description:
        "Explore cross-chain technologies including atomic swaps, bridge contracts, and the Interledger Protocol, enabling seamless blockchain interoperability.",
      points: 10,
    },
    {
      module: "module2",
      level: "level3",
      title: "Smart Contract Security",
      description:
        "Master advanced security techniques including formal verification, principle of least privilege, and invariant testing to build robust and secure smart contracts.",
      points: 10,
    },
    {
      module: "module2",
      level: "level4",
      title: "Advanced Protocol Design",
      description:
        "Learn sophisticated protocol design techniques including gas optimization, MEV protection, and meta-transactions for building efficient and fair decentralized systems.",
      points: 10,
    },
  ];

  // Calculate user level relative to this module
  const userLevel = Math.max(0, Math.floor((turboBalance - MODULE_START_POINTS) / POINTS_PER_LEVEL));
  
  // Calculate progress for the current level
  const currentLevelProgress = ((turboBalance - MODULE_START_POINTS) % POINTS_PER_LEVEL) * 10;

  const progressValues = levels.map((_, index) => {
    if (index < userLevel) return 100; // Completed levels
    if (index === userLevel) return currentLevelProgress; // Current level progress
    return 0; // Not started levels
  });

  const progress = (userLevel / levels.length) * 100;
  const radius = 50;
  const strokeWidth = 6;
  const normalizedRadius = radius - strokeWidth * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div>
      <div onClick={handleHome} className="flex items-center space-x-2 cursor-pointer my-2">
        <img src="/icons/back.svg" className="w-6 h-6 bg-white" />
        <p> Quick Stop</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="space-y-1 w-96">
          <p className="font-semibold text-2xl">Arena de Madrid</p>
          <p className="text-base text-gray-400">
            Explore tricky terrains in the ecosystem. Catch up on deeper concepts on Move; wallets, user management,
            smart contracts, etc.
          </p>
          <Button>
            <Share2 className="mr-2" /> Share
          </Button>
        </div>

        <div className="space-y-3">
          <div className="relative h-24 w-24">
            <svg height={radius * 2} width={radius * 2}>
              <circle
                stroke="gray"
                fill="transparent"
                strokeWidth={strokeWidth}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
              />
              <circle
                stroke="yellow"
                fill="transparent"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
                style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }}
              />
            </svg>
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg text-white">
              {Math.round(progress)}%
            </p>
          </div>

          <div>
            <p className="font-semibold">Level Progress</p>
            <p className="text-base text-gray-400">We're calculating your level progress here</p>
          </div>
        </div>
      </div>

      <Card className="bg-[url('/icons/module-bg.jpeg')] bg-cover bg-center h-[85vh] w-full mt-8 text-white bg-opacity-10">
        <CardContent className="grid grid-cols-2 gap-16 items-center justify-center p-12">
          {levels.map((level, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 cursor-pointer"
              onClick={() => handleNavigate(index, level.module, level.level, level.title, level.description)}
            >
              <p className="px-2 py-1 bg-yellow-200 font-semibold rounded-lg w-fit text-black">Level {index + 1}</p>
              <p className="text-xl font-semibold">{level.title}</p>
              <p className="text-sm text-gray-300">{level.description}</p>
              <div>
                <Progress className="h-3" value={progressValues[index]} />
                <p className="text-sm mt-1 ml-1">{progressValues[index]}% Completed</p>
              </div>
              <div className="space-y-0 w-fit bg-gray-200 rounded-md p-2 text-black">
                <div className="flex space-x-2 items-center">
                  <img src="/icons/car.svg" className="h-6 w-6" />
                  <p className="text-sm font-semibold">
                    {userLevel > index 
                      ? "10 Points" 
                      : index === userLevel 
                        ? `${(turboBalance - MODULE_START_POINTS) % POINTS_PER_LEVEL} Points` 
                        : "0 Points"}
                    <span className="text-xs text-gray-600"> out of 10</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};