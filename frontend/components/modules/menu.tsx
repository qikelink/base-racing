import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader } from "../ui/card";
import { getTokenBalance } from "@/view-functions/getTokenBalance";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { toast } from "../ui/use-toast";

export const Menu = () => {
  const { account } = useWallet();
  const navigate = useNavigate();
  const [tkBalance, setTkBalance] = useState<number>(0);

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
        toast({
          variant: "destructive",
          title: "Error",
          description: error.message,
        });
        return { balance: 0 };
      }
    },
  });

  useEffect(() => {
    if (data) {
      setTkBalance(data.balance);
    }
  }, [data]);

  const turboBalance = tkBalance / Math.pow(10, 8);

  const handleRookie = () => {
    navigate("/rookie");
  };
  const handleCompetitor = () => {
    if (turboBalance < 40) {
      toast({
        variant: "destructive",
        title: "Complete Aptos Colombia",
        description: "Please complete Aptos Colombia arena to unlock Arena de Madrid.",
      });
    } else {
      navigate("/competitor");
    }
  };
  const handleChampion = () => {
    if (turboBalance < 80) {
      toast({
        variant: "destructive",
        title: "Complete Arena de Madrid",
        description: "Please complete Arena de Madrid arena to unlock Times Square, Manhattan.",
      });
    } else {
      navigate("/champion");
    }
  };
  const handleLegend = () => {
    if (turboBalance < 120) {
      toast({
        variant: "destructive",
        title: "Complete Times Square, Manhattan",
        description: "Please complete Times Square, Manhattan arena to unlock Thailand Beaches.",
      });
    } else {
      navigate("/legend");
    }
  };
  return (
    <>
      <div className="flex justify-between items-center mx-auto px-4 mt-6">
        <div className="">
          <p className="text-6xl font-medium md:w-[90%]">
            Race through modules and terrains to level up your Aptos character
          </p>

          <div className="flex justify-start items-end space-x-2">
            <p className="text-base text-gray-400">Join the coolest crypto hangout on Aptos</p>
            <img src="/icons/driver2.png" className="h-16 w-16 cursor-pointer" />
          </div>
        </div>

        <img src="/icons/driver.png" className="w-1/3" />
      </div>

      <div className="space-y-2 mt-6">
        {/* Add svg icon here */}
        <div className="flex items-center space-x-2">
          <img src="/icons/location.svg" className="h-6 w-6 bg-white rounded-full p-1 " />
          <p> Racing Arenas </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Card onClick={handleRookie} className="bg-transparent text-white cursor-pointer">
            <CardHeader className="flex flex-col gap-2">
              <p className="px-2 py-1 bg-yellow-200 font-semibold rounded-lg w-fit text-black">ROOKIE</p>
              <p>Aptos Colombia</p>
              <p>
                Start your journey in the Aptos ecosystem by setting up your wallet and navigating the Apt-terrains.
              </p>
            </CardHeader>
            <CardContent>
              <img src="/icons/4.jpeg" className="h-[400px] w-full rounded-md" />
            </CardContent>
          </Card>

          <Card onClick={handleCompetitor} className="bg-transparent text-white cursor-pointer">
            <CardHeader className="flex flex-col gap-2">
              <p className="px-2 py-1 bg-yellow-200 font-semibold rounded-lg w-fit text-black">COMPETITOR</p>
              <p>Arena de Madrid</p>
              <p>
                {" "}
                Explore tricky terrains in the ecosystem. Catch up on deepers concepts on move; wallets, user
                management, smart contracts etc.
              </p>
            </CardHeader>
            <CardContent>
              <img src="/icons/2.jpeg" className="h-[400px] w-full rounded-md" />
            </CardContent>
          </Card>

          <Card onClick={handleChampion} className="bg-transparent text-white cursor-pointer">
            <CardHeader className="flex flex-col gap-2">
              <p className="px-2 py-1 bg-yellow-200 font-semibold rounded-lg w-fit text-black">CHAMPION</p>
              <p>Times Square, Manhattan</p>
              <p>Dive into advanced lessons on smart contracts and token standards in the Aptos ecosystem.</p>
            </CardHeader>
            <CardContent>
              <img src="/icons/3.jpeg" className="h-[400px] w-full rounded-md" />
            </CardContent>
          </Card>

          <Card onClick={handleLegend} className="bg-transparent text-white cursor-pointer">
            <CardHeader className="flex flex-col gap-2">
              <p className="px-2 py-1 bg-yellow-200 font-semibold rounded-lg w-fit text-black">LEGEND</p>
              <p>Thailand Beaches</p>
              <p>Discover the intricacies of Aptos's governance and community engagement modules.</p>
            </CardHeader>
            <CardContent>
              <img src="/icons/5.jpeg" className="h-[400px] w-full rounded-md" />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};
