import { Button } from "@/components/ui/button";
import { Share2, Star, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
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
type QuestionType = "text" | "image" | "multiple";

interface BaseQuestion {
  type: QuestionType;
  title: string;
  content?: string;
  explanation: string;
}

interface TextQuestion extends BaseQuestion {
  type: "text";
  content: string;
}

interface ImageQuestion extends BaseQuestion {
  type: "image";
  imageUrl: string;
  description: string;
}

interface MultipleChoiceQuestion extends BaseQuestion {
  type: "multiple";
  question: string;
  options: string[];
  correctOptionIndex: number;
}

type Question = TextQuestion | ImageQuestion | MultipleChoiceQuestion;

const TextContent: React.FC<{ question: TextQuestion }> = ({ question }) => (
  <div className="space-y-4">
    <h3 className="text-xl font-semibold">{question.title}</h3>
    <p className="text-base">{question.content}</p>
    <div className="mt-4 p-4 bg-primary rounded-lg">
      <p className="text-sm text-yellow-400 font-medium mb-2">Explanation:</p>
      <p className="text-sm text-gray-300">{question.explanation}</p>
    </div>
  </div>
);

const ImageContent: React.FC<{ question: ImageQuestion }> = ({ question }) => (
  <div className="flex flex-col space-y-4">
    <h3 className="text-xl font-semibold">{question.title}</h3>
    <div className="relative">
      <img src={question.imageUrl} alt={question.title} className="w-full h-96 rounded-lg object-cover" />
    </div>
    <p className="text-base text-gray-300">{question.description}</p>
    <div className="mt-4 p-4 bg-primary rounded-lg">
      <p className="text-sm text-yellow-400 font-medium mb-2">Explanation:</p>
      <p className="text-sm text-gray-300">{question.explanation}</p>
    </div>
  </div>
);

const MultipleChoice: React.FC<{
  question: MultipleChoiceQuestion;
  selectedOption: number | null;
  setSelectedOption: (index: number) => void;
  isAnswerChecked: boolean;
}> = ({ question, selectedOption, setSelectedOption, isAnswerChecked }) => {
  const getFeedbackMessage = () => {
    if (!isAnswerChecked || selectedOption === null) return null;
    
    const isCorrect = selectedOption === question.correctOptionIndex;
    
    const correctMessages = [
      "🌟 You're absolutely crushing it! High five! ✋",
      "🎯 Boom! Nailed it like a boss!",
      "🧠 Look at you, smarty pants! Keep being awesome!",
      "🎉 You rock harder than a geology convention!",
      "⭐ Einstein would be proud of you right now!"
    ];

    const incorrectMessages = [
      "😅 Oopsie-daisy! That's not quite it - but hey, learning is fun!",
      "🤔 Plot twist: that wasn't the right answer - but you're getting warmer!",
      "🎭 Close, but no Broadway musical! Give it another shot!",
      "🌈 Almost there! Like a rainbow without the pot of gold!",
      "🎪 Not quite the right circus act, but the show must go on!"
    ];

    const messageArray = isCorrect ? correctMessages : incorrectMessages;
    return messageArray[Math.floor(Math.random() * messageArray.length)];
  };

  return (
    <div className="w-full  mx-auto">
      <div className="text-xl font-bold">
        {question.title}
      </div>
      <div>
        <p className="mb-4">{question.question}</p>
        
        <div className="space-y-2">
          {question.options.map((option, index) => {
            const isCorrect = index === question.correctOptionIndex;
            const isSelected = selectedOption === index;
            const optionClass = isAnswerChecked
              ? isCorrect
                ? "bg-green-100 border-green-500"
                : isSelected
                  ? "bg-red-100 border-red-500"
                  : "bg-white"
              : isSelected
                ? "bg-yellow-100 border-yellow-500"
                : "bg-white";

            return (
              <div
                key={index}
                className={`p-3 text-black font-medium text-lg border-2 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md ${optionClass}`}
                onClick={() => setSelectedOption(index)}
              >
                <div className="flex items-center gap-2">
                  {isAnswerChecked && isCorrect && (
                    <Star className="text-green-500" size={20} />
                  )}
                  {isAnswerChecked && isSelected && !isCorrect && (
                    <XCircle className="text-red-500" size={20} />
                  )}
                  {option}
                </div>
              </div>
            );
          })}
        </div>

        {isAnswerChecked && (
          <div className="mt-6 space-y-4">
            <p className="text-lg font-medium text-center animate-bounce">
              {getFeedbackMessage()}
            </p>
            <div className="p-4 bg-yellow-50 rounded-md text-black">
              <p className="font-semibold mb-2">Let's break it down:</p>
              <p>{question.explanation}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ProgressCircle: React.FC<{ progress: number }> = ({ progress }) => {
  const radius = 50;
  const strokeWidth = 6;
  const normalizedRadius = radius - strokeWidth * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
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
  );
};

export const Level = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { account, signAndSubmitTransaction } = useWallet();

  const { module, level, title, description } = location.state || {
    module: "module1" as Module,
    level: "level1" as Level,
    title: "",
    description: "",
  };

  const [currentStep, setCurrentStep] = React.useState(0);
  const [selectedOption, setSelectedOption] = React.useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = React.useState(false);
  const [showExplanation, setShowExplanation] = React.useState(false);

  const questions = questionsByModule[module as Module][level as Level] as Question[];
  const progress = ((currentStep + 1) / questions.length) * 100;
  const currentQuestion = questions[currentStep];

  const handleOptionSelect = (index: number) => {
    if (!isAnswerChecked) {
      setSelectedOption(index);
      setIsAnswerChecked(true);
      setShowExplanation(true);
    }
  };

  const handleNext = async () => {
    const canProceed = currentQuestion.type !== "multiple" || selectedOption !== null;

    if (canProceed) {
      if (currentStep === questions.length - 1) {
        await handleFinish();
      } else {
        setCurrentStep(currentStep + 1);
        setSelectedOption(null);
        setIsAnswerChecked(false);
        setShowExplanation(false);
      }
    }
  };

  const handleBack = () => navigate(-1);

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
        description: `Congratulations! Race completed! hash: ${executedTransaction.hash}. Returning back to Arena..`,
      });

      const paths = {
        module1: "/rookie",
        module2: "/competitor",
        module3: "/champion",
        module4: "/legend",
      };

      setTimeout(() => {
        navigate(paths[module as keyof typeof paths]);
      }, 2000);
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Ops.. Failed to complete the level. Please try again.",
      });
    }
  };

  const renderQuestion = () => {
    switch (currentQuestion.type) {
      case "text":
        return <TextContent question={currentQuestion} />;
      case "image":
        return <ImageContent question={currentQuestion} />;
      case "multiple":
        return (
          <MultipleChoice
            question={currentQuestion}
            selectedOption={selectedOption}
            setSelectedOption={handleOptionSelect}
            isAnswerChecked={isAnswerChecked}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div onClick={handleBack} className="flex items-center space-x-2 cursor-pointer my-2">
        <img src="/icons/back.svg" className="w-6 h-6 bg-white" alt="Back" />
        <p>Go Back</p>
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
          <ProgressCircle progress={progress} />
          <div className="space-y-1">
            <p className="font-semibold">Level Progress</p>
            <p className="text-base text-gray-400">
              {currentStep + 1} of {questions.length} completed
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 mt-6">
        <div className="bg-primary p-6 rounded-lg">{renderQuestion()}</div>

        <Progress value={progress} className="h-3 w-full text-yellow-400" />

        <div className="flex justify-end">
          <Button
            className="w-fit rounded-full bg-yellow-500 text-lg font-medium hover:bg-yellow-400"
            onClick={handleNext}
            disabled={currentQuestion.type === "multiple" && selectedOption === null}
          >
            {currentStep === questions.length - 1 ? "Claim Reward" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
};
