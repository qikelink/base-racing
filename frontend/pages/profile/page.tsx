import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { getTokenBalance } from "@/view-functions/getTokenBalance";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { useQuery } from "@tanstack/react-query";
import { CopyIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ProfilePage = () => {
  const { account } = useWallet();
  const navigate = useNavigate();
  const [tkBalance, setTkBalance] = useState<number>(0);

  const { data } = useQuery({
    queryKey: ["apt-balance", account?.address],
    // refetchInterval: 10_000,
    queryFn: async () => {
      try {
        if (!account) {
          console.warn("Account not available");
          return { balance: 0 };
        }

        const balance = await getTokenBalance({ accountAddress: account.address });
        return { balance };
      } catch (error: any) {
        toast({
          variant: "destructive",
          title: "Error",
          description: error.message,
        });
        return { balance: 0 };
      }
    },
  });

  const turboBalance = tkBalance / Math.pow(10, 8);

  useEffect(() => {
    if (data) {
      setTkBalance(data.balance);
    }
  }, [data]);

  useEffect(() => {
    const streakKey = "dailyStreak";
    const lastStreakDateKey = "lastStreakDate";

    const now = new Date();
    const lastStreakDate = localStorage.getItem(lastStreakDateKey);

    if (lastStreakDate) {
      const lastDate = new Date(lastStreakDate);
      const diffInTime = now.getTime() - lastDate.getTime();
      const diffInDays = diffInTime / (1000 * 3600 * 24);

      if (diffInDays >= 1) {
        const newStreak = parseInt(localStorage.getItem(streakKey) || "0", 10) + 1;
        localStorage.setItem(streakKey, newStreak.toString());
        localStorage.setItem(lastStreakDateKey, now.toISOString());
      }
    } else {
      // Initialize the streak if it doesn't exist
      localStorage.setItem(streakKey, "1");
      localStorage.setItem(lastStreakDateKey, now.toISOString());
    }
  }, []);

  const handleModule = () => {
    navigate("/modules");
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      {/* <div onClick={handleBack} className="flex items-center space-x-2 cursor-pointer my-2">
        <img src="/icons/back.svg" className="w-6 h-6 bg-white" />
        <p> Go Back</p>
      </div> */}

      <div className="flex flex-col gap-4 mt-2">
        <div className="relative inline-block">
          <Avatar>
            <AvatarImage
              className="w-16 h-16 rounded-full"
              src="https://utfs.io/f/PKy8oE1GN2J3FwsordxlikYrWEQ0qAVTfL34d9GtgN2aBOje"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="absolute left-0 bottom-0 w-6 h-6 rounded-full bg-gray-700 text-white flex items-center justify-center text-xs">
            {turboBalance}
          </p>
        </div>

        <div>
          <p className="text-lg">User.TG</p>
          <div className="flex space-x-2 items-center">
            <p className="text-sm">{account?.address || "0x34dT...7857"}</p>
            <CopyIcon size={14} />
          </div>
          <Button size={"sm"} variant={"outline"} className="rounded-3xl h-8 mt-2 text-black">
            Edit profile
          </Button>

          <p className="mt-4">No bio available</p>

          <div className="flex items-center space-x-1">
            <img src="/icons/car.svg" className="h-6 w-6" />
            <p className="my-8">
              Riding the terrains since <span className="text-gray-400">October 2024</span>{" "}
            </p>
          </div>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-3 ">
          <Card className="bg-transparent text-white">
            <CardContent className="flex items-center space-x-4 mt-4">
              {/* Icon here */}
              <div className="">
                <img src="/icons/Bolt.svg" className="w-12 h-12 bg-white p-1 rounded-lg" />
              </div>
              <div className="flex-col">
                <p className="text-sm text-gray-400">Streak</p>
                <p> {localStorage.getItem("dailyStreak") || 0}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-transparent text-white">
            <CardContent className="flex items-center space-x-4 mt-4">
              {/* Icon here */}
              <div className="">
                <img src="/icons/File.svg" className="w-12 h-12 bg-white p-1 rounded-lg" />
              </div>
              <div className="flex-col">
                <p className="text-sm text-gray-400">Modules Completed</p>
                <p>
                  {turboBalance < 40
                    ? "0"
                    : turboBalance >= 160
                      ? "4"
                      : turboBalance >= 120
                        ? "3"
                        : turboBalance >= 80
                          ? "2"
                          : "1"}
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-transparent text-white">
            <CardContent className="flex items-center space-x-4 mt-4">
              {/* Icon here */}
              <div className="">
                <img src="/icons/Student.svg" className="w-12 h-12 bg-white p-1 rounded-lg" />
              </div>
              <div className="flex-col">
                <p className="text-sm text-gray-400">User Level</p>
                <p>
                  {turboBalance <= 39
                    ? "Rookie"
                    : turboBalance <= 79
                      ? "Competitor"
                      : turboBalance <= 119
                        ? "Champion"
                        : "Legend"}
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-transparent text-white">
            <CardContent className="flex items-center space-x-4 mt-4">
              {/* Icon here */}
              <div className="">
                <img src="/icons/Brain.svg" className="w-12 h-12 bg-white p-1 rounded-lg" />
              </div>
              <div className="flex-col">
                <p className="text-sm text-gray-400">Knowledge Score</p>
                <p>{turboBalance}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="font-medium">
          <p className="mb-1 font-medium text-lg">Badges</p>
          <Card className="bg-transparent text-white">
            <CardContent className="flex flex-col gap-2 items-center justify-center py-20">
              <p className="font-semibold text-lg">Start riding through the modules</p>
              <p className="font-normal text-sm">Learn everything you need to thrive onchain!</p>
              <Button
                onClick={handleModule}
                size={"sm"}
                className="bg-yellow-400 text-black rounded-full font-semibold "
              >
                Start learning
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};
