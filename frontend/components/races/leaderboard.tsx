import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export const LeaderBoard = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <p>RECENT LEARNERS</p>
        <p>LEADERBOARD {"-->"}</p>
      </div>

      {/* Table  */}
      <div>
        <div className="flex justify-between items-center p-3">
          <div className="flex flex-col gap-2">
            <Avatar>
              <AvatarImage className='w-8 h-8 rounded-full' src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <p>User Level: Drifter</p>
          </div>

          <div className="flex space-x-2">
            {/* add turbo icon */}
            <p>10 Turbos</p>
          </div>
        </div>
        <Separator />
        <div className="flex justify-between items-center p-3">
          <div className="flex flex-col gap-2">
            <Avatar>
              <AvatarImage className='w-8 h-8 rounded-full' src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <p>User Level: Drifter</p>
          </div>

          <div className="flex space-x-2">
            {/* add turbo icon */}
            <p>10 Turbos</p>
          </div>
        </div>
        <Separator />
        <div className="flex justify-between items-center p-3">
          <div className="flex flex-col gap-2">
            <Avatar>
              <AvatarImage className='w-8 h-8 rounded-full' src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <p>User Level: Drifter</p>
          </div>

          <div className="flex space-x-2">
            {/* add turbo icon */}
            <p>10 Turbos</p>
          </div>
        </div>
      </div>
    </div>
  );
};
