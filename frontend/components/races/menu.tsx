import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";

export const Menu = () => {
  return (
    <>
      <div className="flex justify-between items-center mx-auto">
        <div className="space-y-2">
          <p className="text-3xl font-medium md:w-[90%]">Race through modules and terrains to level up your Aptos character</p>

          {/* todo: add turbo token image */}

          <p className="text-base text-gray-400">Join the coolest crypto hangout on Aptos</p>
        </div>

        <img src="/public/icons/hero.png" className="w-1/3" />
      </div>

      <div className="space-y-2 mt-6">
        {/* Add svg icon here */}
        <div className="flex items-center space-x-1">
          <img src="/public/icons/location.svg" className="h-6 w-6 bg-white rounded-full p-1 " />
          <p> Racing Tracks </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Card className="">
            <CardHeader className="flex flex-col gap-2">
              <p className="px-2 py-1 bg-yellow-200 font-semibold rounded-lg w-fit">DRIFTER </p>
              <p>Aptos Camp Adventure </p>
              <p>
                Start your journey in the aptos ecosystem by setting up your wallet and navigating the Apt-terrains{" "}
              </p>
            </CardHeader>
            <CardContent>{/* To do add image */}</CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-col gap-2">
              <p className="px-2 py-1 bg-yellow-200 font-semibold rounded-lg w-fit">DRIFTER </p>
              <p>First Challenge </p>
              <p>Explore some deeper waves in the ecosystem, catchup about DeFi, NFTs and various aspects of it</p>
            </CardHeader>
            <CardContent>{/* To do add image */}</CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};
