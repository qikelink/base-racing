import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";

export const Garage = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Got a crypto question? Take a quick stop at the garage and refuel!</CardTitle>
      </CardHeader>
      <CardContent>
        <Input placeholder="What is ERC-20? "/>
      </CardContent>
    </Card>
  );
};
