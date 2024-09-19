import { Button } from "@/components/ui/button";
import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import React from "react";

export const LeaderboardPage = () => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div>
        <p>Leaderboard</p>
        <p>Compete with friends to top the charts</p>
      </div>

      <div>
        <Button size={"sm"} variant={"ghost"} className="hover:bg-yellow-100 active:bg-yellow-100 rounded-full">
          Last week
        </Button>
        <Button size={"sm"} variant={"ghost"} className="hover:bg-yellow-100 active:bg-yellow-100 rounded-full">
          All time
        </Button>
      </div>

      <div>
        <p>Your Ranking</p>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Rank</TableHead>
              <TableHead>User</TableHead>
              <TableHead className="text-right">Knowledge Score</TableHead>
              <TableHead className="text-right">Streak</TableHead>
              <TableHead className="text-right">$Turbos</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">#2</TableCell>
              <TableCell>
                <Avatar>
                  <AvatarImage className="w-8 h-8 rounded-full" src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell className="text-right">90</TableCell>
              <TableCell className="text-right">8</TableCell>
              <TableCell className="text-right">40</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Rank</TableHead>
              <TableHead>User</TableHead>
              <TableHead className="text-right">Knowledge Score</TableHead>
              <TableHead className="text-right">Streak</TableHead>
              <TableHead className="text-right">$Turbos</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">#1</TableCell>
              <TableCell>
                {" "}
                <Avatar>
                  <AvatarImage className="w-8 h-8 rounded-full" src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell className="text-right">95</TableCell>
              <TableCell className="text-right">10</TableCell>
              <TableCell className="text-right">50</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">#2</TableCell>
              <TableCell>
                <Avatar>
                  <AvatarImage className="w-8 h-8 rounded-full" src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell className="text-right">90</TableCell>
              <TableCell className="text-right">8</TableCell>
              <TableCell className="text-right">40</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">#3</TableCell>
              <TableCell>
                <Avatar>
                  <AvatarImage className="w-8 h-8 rounded-full" src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell className="text-right">85</TableCell>
              <TableCell className="text-right">5</TableCell>
              <TableCell className="text-right">30</TableCell>
            </TableRow>
            {/* Add more rows as needed */}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
