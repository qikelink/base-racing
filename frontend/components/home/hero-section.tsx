import React from "react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <p className="text-xl font-semibold">Learn, Earn and Turbo through possiblities on <span className="text-yellow-400">Aptos</span> </p>
      <p>Your easy guide to all things onchain, one wave at a time</p>
      <Button size={'lg'} className='bg-yellow-400 rounded-full '>Get Started</Button>

      {/* Todo; add image  */}
    </div>
  );
};
