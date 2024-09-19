import { WalletSelector } from "./WalletSelector";

export function Header() {
  return (
    <>
      <div className="w-full bg-yellow-200 p-1">
        <p className="text-sm text-center ">Thanks for trying out our beta</p>
      </div>
      <div className="flex items-center justify-between px-4 py-2 max-w-screen-xl mx-auto w-full flex-wrap">
        <h1 className="display">TurboGo</h1>

        <div className="flex gap-2 items-center flex-wrap">
          <WalletSelector />
        </div>
      </div>
    </>
  );
}
