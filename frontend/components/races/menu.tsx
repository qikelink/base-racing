import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";

export const Menu = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-xl font-medium">Race through modules and terrains to level up your Aptos character</p>

          {/* todo: add turbo token image */}

          <p>Join the coolest crypto hangout on Aptos</p>
        </div>

        {/* todo: add image  */}
      </div>

      <div>
        {/* Add svg icon here */}
        <p> Racing Tracks </p>

        <Card>
          <CardHeader className="flex flex-col gap-2">
            <p className="px-2 py-1 bg-yellow-200 rounded-lg w-fit">DRIFTER </p>
            <p>Aptos Camp Adventure </p>
            <p>Start your journey in the aptos ecosystem by setting up your wallet and navigating the Apt-terrains </p>
          </CardHeader>
          <CardContent>{/* To do add image */}</CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-col gap-2">
            <p className="px-2 py-1 bg-yellow-200 rounded-lg w-fit">DRIFTER </p>
            <p>First Challenge </p>
            <p>Explore some deeper waves in the ecosystem, catchup about DeFi, NFTs and various aspects of it</p>
          </CardHeader>
          <CardContent>{/* To do add image */}</CardContent>
        </Card>
      </div>
    </>
  );
};
