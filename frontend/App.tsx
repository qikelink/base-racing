import { useWallet } from "@aptos-labs/wallet-adapter-react";
// Internal Components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/general/Header";
import { WalletDetails } from "@/components/general/WalletDetails";
import { NetworkInfo } from "@/components/general/NetworkInfo";
import { AccountInfo } from "@/components/general/AccountInfo";
import { TransferAPT } from "@/components/general/TransferAPT";
import { MessageBoard } from "@/components/general/MessageBoard";
import { HeroSection } from "./components/home/hero-section";
import { Features } from "./components/home/features";
import { Footer } from "./components/general/Footer";
import { UserAnalysis } from "./components/onboarding/user-analysis";
import { Menu } from "./components/races/menu";
import { Garage } from "./components/races/garage";
import { LeaderBoard } from "./components/races/leaderboard";
import { GaragePage } from "./pages/garage/page";
import { LeaderboardPage } from "./pages/leaderboard/page";
import { ProfilePage } from "./pages/profile/page";

function App() {
  const { connected } = useWallet();

  return (
    <>
      <Header />
      <div className="flex items-center justify-center flex-col">
        {connected ? (
          <Card>
            <CardContent className="flex flex-col gap-10 pt-6">
              <WalletDetails />
              <NetworkInfo />
              <AccountInfo />
              <TransferAPT />
              <MessageBoard />
            </CardContent>
          </Card>
        ) : (
          <div className="w-full p-5">
            {/* <CardTitle>To get started Connect a wallet</CardTitle> */}
            {/* <HeroSection/>
            <Features/>
            <Footer/> */}
            <Menu/>
            <Garage/>
            <LeaderBoard/>
           
           
           
            <Footer/>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
