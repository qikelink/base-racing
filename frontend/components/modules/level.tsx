import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";
import React from "react";

const questions = [
  {
    question: "Hey there! what brings you to Aptos Track today?",
    options: ["Just curious about Aptos", "Wanna explore Aptos", "I'm a Pro, bring it on!"],
    type: "multiple",
  },
  {
    question: "How familiar are you with Aptos and other blockchain solutions, on a scale of 1-5?",
    options: ["1", "2", "3", "4", "5"],
    type: "scale",
  },
  {
    question: "Which of the following is true about Aptos?",
    options: [
      "It uses ..",
      "It's EVM compatible",
      "Smart contracts are written with solidity",
      "It has its own native token called Aptos",
    ],
    type: "multiple",
  },
  {
    question: "Okay, we found your spot to start racing. Ready to dive in?",
    options: ["Hell yeah!", "I'd like to start easier", "I'm up for a bigger challenge"],
    type: "multiple",
  },
];

export const Level = () => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [selectedOption, setSelectedOption] = React.useState<number | null>(null); // Allow number or null
  const progress = ((currentStep + 1) / questions.length) * 100;

  const handleNext = () => {
    if (selectedOption !== null) {
      setCurrentStep(currentStep + 1);
      setSelectedOption(null); // Reset selected option for next question
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center ">
        <div className="space-y-1 w-96">
          <p className="font-semibold text-2xl">Getting Started with Aptos</p>
          <p className="text-base text-gray-400">
            Learn the basics of blockchain technology and how Aptos fits into the ecosystem. Set up your wallet and
            familiarize yourself with its features.
          </p>
          <Button>
            {" "}
            <Share2 className="mr-2 " /> Share
          </Button>
        </div>

        <div className="space-y-1">
          <div className="rounded-full border-[6px] border-gray-400 h-24 w-24 flex justify-center items-center">
            <p>0%</p>
          </div>

          <p className="font-semibold">Level Progress</p>
          <p className="text-base text-gray-400">We're calculating your level progress here</p>
        </div>
      </div>

      <div className="flex flex-col gap-5 mt-6">
        <p>{questions[currentStep].question}</p>

        <div className={`grid ${questions[currentStep].type === "scale" ? "grid-cols-5" : "grid-cols-1"} gap-3`}>
          {questions[currentStep].options.map((option, index) => (
            <Card
              key={index}
              className={`cursor-pointer ${selectedOption === index ? "bg-yellow-50" : "bg-white"}`}
              onClick={() => setSelectedOption(index)}
            >
              <CardHeader>
                <CardTitle>{option}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>

        <Progress value={progress} className="h-3 w-full text-yellow-400" />

        <div className="flex justify-end">
          <Button
            className="w-24 rounded-full bg-yellow-500 text-lg font-medium"
            onClick={handleNext}
            disabled={selectedOption === null}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};
