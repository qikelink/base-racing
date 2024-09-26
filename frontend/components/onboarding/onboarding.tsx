import React from "react";
import { Progress } from "@/components/ui/progress";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    question: "What best describes your experience with blockchain technology?",
    options: [
      "I'm a complete beginner.",
      "I know some basics.",
      "I've worked with blockchain projects before.",
      "I'm an expert in blockchain technology.",
    ],
    type: "multiple",
  },
  {
    question: "How familiar are you with smart contracts?",
    options: ["Not at all", "Somewhat familiar", "I have created smart contracts", "I am a smart contract expert"],
    type: "multiple",
  },
  {
    question: "What is your current level of understanding of the Aptos blockchain?",
    options: [
      "I'm completely new to blockchain and Aptos.",
      "I have a basic understanding of blockchain concepts.",
      "I know a bit about Aptos and its features.",
      "I'm familiar with Aptos and have worked with it before.",
    ],
    type: "multiple",
  },
  {
    question: "Have you interacted with smart contracts on Aptos?",
    options: [
      "No, I haven't worked with smart contracts.",
      "I've read about them but haven't tried.",
      "I have created a few smart contracts on Aptos.",
      "I'm experienced with developing smart contracts on Aptos.",
    ],
    type: "multiple",
  },
  {
    question: "Okay, we found your spot to start racing. Ready to dive in?",
    options: ["Hell yeah!", "I'd like to start easier", "I’d like a mix of easy and challenging topics."],
    type: "multiple",
  },
];

export const Onboarding = () => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [selectedOption, setSelectedOption] = React.useState<number | null>(null);
  const progress = ((currentStep + 1) / questions.length) * 100;
  const navigate = useNavigate();

  const handleNext = () => {
    if (selectedOption !== null) {
      if (currentStep === questions.length - 1) {
        navigate("/rookie");
      } else {
        setCurrentStep(currentStep + 1);
        setSelectedOption(null);
      }
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow flex flex-col justify-center">
        <p className="text-2xl text-start mb-4 font-semibold ">
          Welcome to TurboGo, quick questions to get you set up 🚀
        </p>
        <p className="text-base text-start text-gray-400">{questions[currentStep].question}</p>

        <div
          className={`grid ${questions[currentStep].type === "scale" ? "grid-cols-5" : "grid-cols-1"} gap-3 mt-4 w-full`}
        >
          {questions[currentStep].options.map((option, index) => (
            <Card
              key={index}
              className={`cursor-pointer ${selectedOption === index ? "bg-yellow-100" : "bg-gray-100"}`}
              onClick={() => setSelectedOption(index)}
            >
              <CardHeader>
                <CardTitle>{option}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>

        <Progress value={progress} className="w-full h-3 text-yellow-400 mt-4" />

        <div className="flex justify-end mt-4">
          <Button
            className="w-24 rounded-full bg-yellow-500 hover:bg-yellow-400 text-lg font-medium"
            onClick={handleNext}
            disabled={selectedOption === null} // Disable if no option is selected
          >
            Next
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">Footer Content Here</footer>
    </div>
  );
};
