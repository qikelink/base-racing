import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

export const Features = () => {
  return (
    <div className="">
      <p className="text-center text-2xl font-semibold">
        Making onchain onboarding feel less esoteric, simplier and fun
      </p>
      <div className="grid grid-cols-2 gap-3">
        <Card>
          <CardHeader>
            <CardTitle>Ride the Asphalt of knowledge</CardTitle>
          </CardHeader>
          <CardContent>
            Interactive races and modules tailored to your level and skills. No matter where you are in your crypto
            voyage, there's always new terrains to explore
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Earn Whilst You Learn</CardTitle>
          </CardHeader>
          <CardContent>
            Earn $TURBO, our virtual platform token and collect NFT badges as you progress. Use them for exclusive perks
            and opportunities later in the Aptos ecosystem.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Navigate With Ease</CardTitle>
          </CardHeader>
          <CardContent>
            Explore an interactive map of the Aptos ecosystem. Discover new projects, protocols and opportunities as you{" "}
            <span className="text-yellow-400 font-medium">Ride</span> through your learning adventure. You're always
            early when you're with TurboGo.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Knowledge Score</CardTitle>
          </CardHeader>
          <CardContent>
            Level up your knowledge and build your onchain reputation. Watch your knowledge score rise as you master new
            skills and concepts.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Join the Crew</CardTitle>
          </CardHeader>
          <CardContent>
            Race to the top of our leaderboard. Invite friends to boost your rewards and build your network.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Onchain Profile</CardTitle>
          </CardHeader>
          <CardContent>
            Your unique profile that you can share and showcase your achievements, badges and expertise to the world.
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="flex flex-col gap-3 items-center">
          <p className="text-xl font-semibold">
            It's to <span className="text-yellow-400">Revv</span> onchain{" "}
          </p>
          <p>Unlock the possiblities of Aptos</p>
          <Button size={"lg"} className="bg-yellow-400 rounded-full ">
            Launch App
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};