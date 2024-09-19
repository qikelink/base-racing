import { Car, CarIcon, FlameIcon } from "lucide-react";
import { Button } from "../ui/button";
import { WalletSelector } from "./WalletSelector";

export function Header() {
  return (
    <>
      <div className="w-full bg-yellow-200 p-1">
        <p className="text-sm text-center text-black ">Thanks for trying out our beta</p>
      </div>
      <div className="flex items-center justify-between px-4 py-2 max-w-screen-xl mx-auto w-full flex-wrap">
        <h3 className="text-xl font-bold ">TurboGo</h3>

        <div className="flex gap-3 items-center flex-wrap">
          <div className="flex space-x-1 items-center">
          <img src="/public/icons/car.svg" className="h-10 w-10" />
            <p className="text-sm">10 Turbos</p>
          </div>
          <Button>
          <img src="/public/icons/Fire.svg" className=" h-4 w-4" /> 0
          </Button>
          <WalletSelector />
        </div>
      </div>
    </>
  );
}
