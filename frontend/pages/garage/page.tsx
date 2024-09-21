import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const GaragePage = () => {
  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  const handleSend = () => {
    console.log("Message sent:", message);
    setMessage("");
  };

  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <div className=" h-[88vh]">
      <div onClick={handleNavigate} className="flex items-center space-x-2 cursor-pointer">
        <img src="/public/icons/back.svg" className="w-6 h-6 bg-white" />
        <p> Quick Stop</p>
        <img src="/public/icons/racing-car.svg" className="w-12 h-12" />
      </div>

      <p className="mb-2">
        Explore the web3 ecosystem and find resources that you need. Ask follow-up questions to dive deeper
      </p>
      <Separator />

      {/* Chat Area */}
      <div className="flex flex-col w-full my-4 flex-grow h-[70%] overflow-y-auto">
        <div className="flex justify-end w-full mb-3">
          <div className="flex items-start space-x-2 bg-yellow-200 p-2 rounded-lg shadow">
            {/* Person Icon here */}
            <img src="/public/icons/profile.svg" className="h-6 w-6" />
            <p className="text-black">Hello, I have a question!</p>
          </div>
        </div>
        <div className="flex justify-start w-full mb-3">
          <div className="flex items-start space-x-2 bg-primary p-2 rounded-lg shadow text-white">
            {/* AI Icon here */}
            <img src="/public/icons/AI.svg" className="h-6 w-6 bg-white rounded-sm p-[1px]" />
            <p>
              Go ahead and ask, I'm glad to help in any way Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Adipisci quisquam porro earum!
            </p>
          </div>
        </div>
      </div>

      {/* Chat Input Area */}
      <Separator />
      <div className="flex items-center w-full mt-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 border rounded-2xl p-2 border-gray-300 bg-transparent"
        />
        <Button
          onClick={handleSend}
          className="ml-2 bg-yellow-200 hover:bg-yellow-100 text-black rounded-full py-2 px-5"
        >
          <img src="/public/icons/Race.svg" className="h-6 w-6" />
          <p> Dive In</p>
        </Button>
      </div>
    </div>
  );
};
