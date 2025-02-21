"use client";
import { useState } from "react";
import { Send, Loader2, RefreshCw } from "lucide-react";

export default function AgriChatBotInterface() {
  const [messages, setMessages] = useState([
    {
      type: "system",
      content:
        "Welcome to the Agricultural Assistant! I can help you with farming-related questions. Feel free to ask about crops, soil, weather, or any agricultural topics.",
    },
  ]);
  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!input.trim()) return "Ask me about agriculture";

    // Add user message
    setMessages((prev) => [...prev, { type: "user", content: input }]);
    setIsLoading(true);
    setInput("");

    // Simulate API call delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "assistant",
          content:
            "This is a simulated response. In the actual implementation, this would be replaced with the model's response.",
        },
      ]);
      setIsLoading(false);
    }, 1000);
  };

  const clearChat = () => {
    setMessages([
      {
        type: "system",
        content:
          "Welcome to the Agricultural Assistant! Feel free to ask about crops, soil, weather, or any agricultural topics.",
      },
    ]);
  };
  return (
    <>
      <div className="flex flex-col h-screen max-w-4xl mx-auto p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4 p-4 bg-green-50 rounded-lg">
          <h1 className="text-2xl  font-Nunito_Sans font-bold text-green-800">
            Agricultural Assistant
          </h1>
          <button
            onClick={clearChat}
            className="flex items-center gap-2 px-3 py-2 text-sm text-green-700 hover:bg-green-100 rounded-md transition-colors"
          >
            <RefreshCw size={18} />
            Clear Chat
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto mb-4 p-4 bg-white rounded-lg border">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === "user"
                      ? "bg-green-600 text-white"
                      : message.type === "system"
                      ? "bg-blue-50 text-blue-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] p-3 rounded-lg bg-gray-100">
                  <Loader2 className="animate-spin" size={20} />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about farming, crops, or agricultural practices..."
            className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            <Send size={20} />
          </button>
        </form>

        {/* Help Text */}
        <div className="mt-4 text-sm text-gray-600">
          <p className="font-medium mb-2">Quick Tips:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Ask specific questions about crops, soil types, or farming
              practices
            </li>
            <li>
              You can ask follow-up questions for more detailed information
            </li>
            <li>Clear the chat anytime using the button above</li>
          </ul>
        </div>
      </div>
    </>
  );
}
