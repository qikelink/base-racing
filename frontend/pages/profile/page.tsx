import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { CopyIcon } from "lucide-react";
import React from "react";

export const ProfilePage = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative inline-block">
        <Avatar>
          <AvatarImage className="w-16 h-16 rounded-full" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="absolute left-0 bottom-0 w-6 h-6 rounded-full bg-gray-700 text-white flex items-center justify-center text-xs">
          56
        </p>
      </div>

      <div>
        <p className="text-lg">User</p>
        <div className="flex space-x-2 items-center">
        <p className="text-sm">0x4729...6517</p>
        <CopyIcon size={14}/>
        </div>
       <Button size={'sm'} variant={'outline'} className="rounded-3xl h-8 mt-2">
        Edit profile
       </Button>

       <p className="mt-4">No bio available</p>

       <p className="my-8">Drifting on terrains since <span>September 18th 2024</span> </p>
      </div>

      <div className="flex flex-col gap-3">
      <Card>
        <CardContent className="flex items-center space-x-4">
        {/* Icon here */}
        <div className="flex-col">
            <p>Streak</p>
            <p>0 days</p>
        </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex items-center space-x-4">
        {/* Icon here */}
        <div className="flex-col">
            <p>Modules Completed</p>
            <p>0 </p>
        </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex items-center space-x-4">
        {/* Icon here */}
        <div className="flex-col">
            <p>User Level</p>
            <p>Drifter</p>
        </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex items-center space-x-4">
        {/* Icon here */}
        <div className="flex-col">
            <p>Knowledge Score</p>
            <p>56</p>
        </div>
        </CardContent>
      </Card>
      </div>

      <div>
        <p>Badges</p>
        <Card>
            <CardContent className="flex flex-col gap-2 items-center justify-center">
                <p>Start riding through the modules</p>
                <p>Learn everything you need to thrive onchain!</p>
                <Button size={'sm'} className="bg-yellow-400 text-black rounded-full ">Start learning</Button>
            </CardContent>
        </Card>
      </div>
    </div>
  );
};
