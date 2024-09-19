import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";

export const GaragePage = () => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    // Logic to send the message goes here
    console.log("Message sent:", message);
    setMessage(""); // Clear input after sending
  };

  return (
    <div className="grid gap-y-3">
      <p>{"<--"} Quick Stop</p>
      <p>Explore the web3 ecosystem and find resources that you need. Ask follow-up questions to dive deeper</p>
      <Separator />

      {/* Chat Area */}
      <div className="flex flex-col w-full mb-4 flex-grow overflow-y-auto ">
        <div className="flex justify-end w-full mb-2">
          <div className="flex space-x-2 bg-yellow-200 p-2 rounded-lg shadow">
            {/* Person Icon here */}
            <p>Hello, I have a question</p>
          </div>
        </div>
        <div className="flex justify-start w-full mb-2">
          <div className="flex space-x-2 bg-primary p-2 rounded-lg shadow text-white">
            {/* AI Icon here */}
            <p>Go ahead and ask, I'm glad to help in any way</p>
          </div>
        </div>
      </div>

      {/* Chat Input Area */}
      <Separator/>
      <div className="flex items-center w-full">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 border rounded-lg p-2 border-gray-300"
        />
        <Button
          onClick={handleSend}
          
          className="ml-2 bg-yellow-200 text-black rounded-full py-2 px-5"
        >
          Dive In 
        </Button>
      </div>
    </div>
  );
};
