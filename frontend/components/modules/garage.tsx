import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { useNavigate } from "react-router-dom";

export const Garage = () => {
  const navigate = useNavigate();

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      navigate("/garage");
    }
  };

  return (
    <Card className="bg-transparent text-white py-4 mt-6">
      <div className="flex items-center space-x-1 justify-start ml-5">
        <CardTitle>Got a crypto question? Take a quick stop at the garage and refuel!</CardTitle>
        <img src="/public/icons/racing-car.svg" className="h-12 w-12" />
      </div>
      <CardContent>
        <Input 
          placeholder="What is ERC-20?" 
          className="bg-transparent" 
          onKeyPress={handleKeyPress} 
        />
      </CardContent>
    </Card>
  );
};
