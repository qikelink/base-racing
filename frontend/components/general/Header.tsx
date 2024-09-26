import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { WalletSelector } from "./WalletSelector";
import { useQuery } from "@tanstack/react-query";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { getTokenBalance } from "@/view-functions/getTokenBalance";
import { toast } from "../ui/use-toast";
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
        toast({
          variant: "destructive",
          title: "Error",
          description: error.message || "An error occurred",
        });
        return {
          balance: 0,
        };
      }
    },
    enabled: !!account && connected, // Only run query if account and connected are true
  });

  useEffect(() => {
    if (data) {
      setTkBalance(data.balance);
    }
  }, [data]);

  return (
    <>
      <div className="w-full bg-yellow-200 p-1">
        <p className="text-sm text-center text-black ">Thanks for trying out our beta</p>
      </div>
      <div className="flex items-center  justify-between px-4 py-2 max-w-screen-2xl mx-auto w-full flex-wrap lg:px-20">
        <h3 onClick={handleHome} className="text-xl font-bold cursor-pointer">
          TurboGo
        </h3>

        <div className="flex gap-3 items-center flex-wrap">
          <div className="flex space-x-1 items-center">
            <img src="/public/icons/car.svg" className="h-9 w-9" />
            <p className="text-sm">{tkBalance / Math.pow(10, 8)} Turbos</p>
          </div>
          <Button>
            <img src="/icons/Fire.svg" className=" h-4 w-4" /> 0
          </Button>
          <WalletSelector />
        </div>
      </div>
    </>
  );
}
