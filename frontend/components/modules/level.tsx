import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { mintAsset } from "@/entry-functions/mint_asset";
import { aptosClient } from "@/utils/aptosClient";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "../ui/use-toast";
import { questionsByModule } from "@/utils/questions";

type Level = "level1" | "level2" | "level3" | "level4";
type Module = "module1" | "module2";

export const Level = () => {
  const location = useLocation();
  const { module, level, title, description } = location.state || {
    module: "module1" as Module,
    level: "level1" as Level,
    title: "",
    description: "",
  };
  const [currentStep, setCurrentStep] = React.useState(0);
  const [selectedOption, setSelectedOption] = React.useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = React.useState(false); // New state to track if the answer is checked

  const questions = questionsByModule[module as Module][level as Level];
  const progress = ((currentStep + 1) / questions.length) * 100;
  const queryClient = useQueryClient();
  const { account, signAndSubmitTransaction } = useWallet();
  const currentQuestion = questions[currentStep];
  const navigate = useNavigate();

  const handleNext = async () => {
    if (selectedOption !== null || currentQuestion.type !== "multiple") {
      if (currentStep === questions.length - 1) {
        await handleFinish();
      } else {
        setCurrentStep(currentStep + 1);
        setSelectedOption(null);
        setIsAnswerChecked(false); // Reset answer check state
      }
    }
  };

  const radius = 50;
  const strokeWidth = 6;
  const normalizedRadius = radius - strokeWidth * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  const handleBack = () => {
    navigate(-1);
  };

  const handleFinish = async () => {
    if (!account) {
      toast({
        title: "Error",
        description: "Please connect your wallet to complete level and claim rewards.",
      });
      return;
    }

    try {
      const committedTransaction = await signAndSubmitTransaction(mintAsset({ amount: 10 }));
      const executedTransaction = await aptosClient().waitForTransaction({
        transactionHash: committedTransaction.hash,
      });
      queryClient.invalidateQueries();
      toast({
        title: "Success",
        description: `Congratulations! Level completed. Transaction succeeded, hash: ${executedTransaction.hash}`,
      });
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Ops.. Failed to complete the level. Please try again.",
      });
    }
  };

  return (
    <div>
      <div onClick={handleBack} className="flex items-center space-x-2 cursor-pointer my-2">
        <img src="/icons/back.svg" className="w-6 h-6 bg-white" />
        <p> Go Back</p>
      </div>
      <div className="flex justify-between items-center mt-6">
        <div className="space-y-2 w-96">
          <p className="font-semibold text-2xl">{title}</p>
          <p className="text-base text-gray-400">{description}</p>
          <Button>
            <Share2 className="mr-2" /> Share
          </Button>
        </div>

        <div className="space-y-3">
          <div className="relative h-24 w-24">
            <svg height={radius * 2} width={radius * 2}>
              <circle
                stroke="gray"
                fill="transparent"
                strokeWidth={strokeWidth}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
              />
              <circle
                stroke="yellow"
                fill="transparent"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
                style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }}
              />
            </svg>
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg text-white">
              {Math.round(progress)}%
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-semibold">Level Progress</p>
            <p className="text-base text-gray-400">We're calculating your level progress here</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 mt-6">
        <p className="mt-6 text-lg font-medium">{currentQuestion?.question}</p>

        {currentQuestion?.type === "multiple" && (
          <div className="grid grid-cols-1 gap-3">
            {currentQuestion.options?.map((option, index) => {
              const isCorrect = index === currentQuestion.correctOptionIndex; // Assuming the correct option index is provided
              const isSelected = selectedOption === index;
              const optionClass = isAnswerChecked
                ? isCorrect
                  ? "bg-yellow-200"
                  : isSelected
                    ? "bg-red-400"
                    : "bg-white"
                : isSelected
                  ? "bg-yellow-100"
                  : "bg-white";

              return (
                <Card
                  key={index}
                  className={`cursor-pointer ${optionClass}`}
                  onClick={() => {
                    setSelectedOption(index);
                    setIsAnswerChecked(true); // Check the answer
                  }}
                >
                  <CardHeader>
                    <CardTitle>{option}</CardTitle>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        )}

        {currentQuestion?.type === "scale" && (
          <div className="grid grid-cols-5 gap-3">
            {currentQuestion.options?.map((option, index) => {
              const isCorrect = index === currentQuestion.correctOptionIndex;
              const isSelected = selectedOption === index;
              const optionClass = isAnswerChecked
                ? isCorrect
                  ? "bg-yellow-200"
                  : isSelected
                    ? "bg-red-400"
                    : "bg-white"
                : isSelected
                  ? "bg-yellow-100"
                  : "bg-white";

              return (
                <Card
                  key={index}
                  className={`cursor-pointer ${optionClass}`}
                  onClick={() => {
                    setSelectedOption(index);
                    setIsAnswerChecked(true); // Check the answer
                  }}
                >
                  <CardHeader>
                    <CardTitle>{option}</CardTitle>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        )}

        {currentQuestion?.type === "text" && <p className="text-sm text-gray-300">{currentQuestion.description}</p>}

        {currentQuestion?.type === "image" && (
          <div className="flex flex-col items-center">
            <img src={currentQuestion.imageUrl} alt="Aptos Ecosystem" className="mb-4 h-96 w-full rounded-md" />
            <p className="text-sm text-gray-300">{currentQuestion.description}</p>
          </div>
        )}

        <Progress value={progress} className="h-3 w-full text-yellow-400" />

        <div className="flex justify-end">
          <Button
            className="w-fit rounded-full bg-yellow-500 text-lg font-medium hover:bg-yellow-400"
            onClick={handleNext}
            disabled={currentQuestion?.type === "multiple" && selectedOption === null}
          >
            {currentStep === questions.length - 1 ? "Claim Reward" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
};
