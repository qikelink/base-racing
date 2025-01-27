import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { WalletSelector } from "./WalletSelector";
import { useQuery } from "@tanstack/react-query";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { getTokenBalance } from "@/view-functions/getTokenBalance";
import { useEffect, useState } from "react";

export function Header() {
  const { account, connected } = useWallet();
  const navigate = useNavigate();
  const [tkBalance, setTkBalance] = useState<number>(0);

  const handleHome = () => {
    navigate("/");
  };

  const { data } = useQuery({
    queryKey: ["apt-balance", account?.address],
    refetchInterval: 10_000,
    queryFn: async () => {
      try {
        if (!account || !connected) {
          console.error("Account not available or not connected");
          return { balance: 0 };
        }

        const balance = await getTokenBalance({ accountAddress: account.address });

        return {
          balance,
        };
      } catch (error: any) {
        return { balance: 0 };
      }
    },
    enabled: !!account && !!connected, // Only run query if account and connected are true
  });

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

  return (
    <>
      <div className="w-full bg-yellow-200 p-1">
        <p className="text-sm text-center text-black">Thanks for trying out our beta, leave us some feedback</p>
      </div>
      <div className="flex items-center justify-between px-4 py-2 max-w-screen-2xl mx-auto w-full flex-wrap lg:px-20">
        <h3 onClick={handleHome} className="text-xl font-bold cursor-pointer">
          TurboGo
        </h3>

        <div className="flex gap-3 items-center flex-wrap">
          <div className="flex space-x-1 items-center">
            <img
              src="https://res.cloudinary.com/dgbreoalg/image/upload/v1728734246/car_dxdbfv.svg"
              className="h-9 w-9"
            />
            <p className="text-sm">{tkBalance / Math.pow(10, 8)} Turbos</p>
          </div>
          <Button>
            <img src="/icons/Fire.svg" className="h-4 w-4" />
            {localStorage.getItem("dailyStreak") || 0}
          </Button>
          <WalletSelector />
        </div>
      </div>
    </>
  );
}
