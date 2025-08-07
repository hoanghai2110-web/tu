import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";

export const HomeAnswer = (): JSX.Element => {
  // Message data
  const userMessage = {
    text: "How are you?",
  };

  const aiResponse = {
    text: "As an AI language model, I don't have feelings or emotions like humans do, so I'm not capable of feeling sad or any other emotion. I'm designed to assist and provide information to users to the best of my ability. How can I assist you today?",
  };

  return (
    <main className="bg-[#f2efe4] grid justify-items-center [align-items:start] w-screen min-h-screen h-full">
      <div className="bg-othersscreen-bg w-[375px] h-[812px] relative">
        {/* Status Bar */}
        <header className="inline-flex flex-col items-start absolute top-0 left-0 w-full">
          <div className="flex w-full items-center justify-between px-6 py-3.5">
            <div className="relative w-10 h-5 mt-[-1.00px] [font-family:'SF_Pro_Rounded-Bold',Helvetica] font-bold text-black-and-whiteblack text-base text-center tracking-[0] leading-[normal]">
              3:29
            </div>

            <div className="inline-flex items-start gap-1">
              <div className="relative w-6 h-5">
                <div className="relative w-4 h-3.5 top-[3px] left-1 bg-[url(/combo-shape.svg)] bg-[100%_100%]" />
              </div>

              <img
                className="relative w-6 h-5"
                alt="Battery icon"
                src="/huge-icon-device-solid-battery-horizontal-charging.svg"
              />
            </div>
          </div>

          {/* Navigation Bar */}
          <nav className="relative w-full h-12">
            <img
              className="absolute w-8 h-8 top-2 left-5"
              alt="Menu icon"
              src="/icon-fill-menu.svg"
            />

            <img
              className="absolute w-8 h-8 top-2 left-[323px]"
              alt="User profile icon"
              src="/huge-icon-user-solid-user-circle.svg"
            />
          </nav>
        </header>

        {/* User Message */}
        <Card className="flex w-[130px] items-center gap-2 p-3 absolute top-28 left-5 bg-black-and-whitewhite rounded-[12px_12px_12px_4px] overflow-hidden border-none">
          <CardContent className="p-0">
            <div className="relative flex-1 mt-[-1.00px] font-app-body font-[number:var(--app-body-font-weight)] text-typographybody text-[length:var(--app-body-font-size)] tracking-[var(--app-body-letter-spacing)] leading-[var(--app-body-line-height)] [font-style:var(--app-body-font-style)]">
              {userMessage.text}
            </div>
          </CardContent>
        </Card>

        <img
          className="absolute w-6 h-6 top-[123px] left-[166px]"
          alt="Edit icon"
          src="/icon-fill-edit.svg"
        />

        {/* AI Response */}
        <Card className="flex flex-col w-[335px] items-start justify-center gap-4 p-3 absolute top-[178px] left-5 bg-otherstext-bg rounded-[12px_12px_12px_4px] overflow-hidden border-none">
          <CardContent className="p-0 space-y-4 w-full">
            <div className="relative self-stretch mt-[-1.00px] font-app-body font-[number:var(--app-body-font-weight)] text-typographybody text-[length:var(--app-body-font-size)] tracking-[var(--app-body-letter-spacing)] leading-[var(--app-body-line-height)] [font-style:var(--app-body-font-style)]">
              {aiResponse.text}
            </div>

            <Separator className="relative w-[319px] h-0.5 mr-[-8.00px] bg-othersborders" />

            <div className="flex items-center justify-between relative self-stretch w-full">
              <div className="inline-flex items-start gap-3">
                <Button variant="ghost" className="p-0 h-auto">
                  <img
                    className="relative w-6 h-6"
                    alt="Like button"
                    src="/icon-outline-like.svg"
                  />
                </Button>

                <Button variant="ghost" className="p-0 h-auto">
                  <img
                    className="relative w-6 h-6"
                    alt="Dislike button"
                    src="/icon-outline-dislike.svg"
                  />
                </Button>
              </div>

              <Button
                variant="ghost"
                className="inline-flex items-center gap-[5px] p-0 h-auto"
              >
                <img
                  className="relative w-5 h-5"
                  alt="Copy icon"
                  src="/icon-fill-clipboard.svg"
                />

                <span className="relative w-fit mt-[-1.00px] font-app-body font-[number:var(--app-body-font-weight)] text-black-and-whiteblack text-[length:var(--app-body-font-size)] tracking-[var(--app-body-letter-spacing)] leading-[var(--app-body-line-height)] whitespace-nowrap [font-style:var(--app-body-font-style)]">
                  Copy
                </span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Input Area */}
        <div className="flex flex-col w-[267px] h-[60px] items-center absolute top-[688px] left-5">
          <div className="flex items-center gap-[19px] px-4 py-3.5 relative flex-1 self-stretch w-full grow bg-otherstext-bg rounded-xl overflow-hidden border border-solid border-[#e9e4d1]">
            <Input
              className="flex-1 font-app-body font-[number:var(--app-body-font-weight)] text-othersgrey-01 text-[length:var(--app-body-font-size)] tracking-[var(--app-body-letter-spacing)] leading-[var(--app-body-line-height)] [font-style:var(--app-body-font-style)] border-none bg-transparent p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="Ask me anything..."
            />

            <Button variant="ghost" className="p-0 h-auto w-8">
              <div className="relative w-7 h-[21px] top-[5px] left-0.5 bg-[url(/combo-shape-1.svg)] bg-[100%_100%]" />
            </Button>
          </div>
        </div>

        {/* Reload Button */}
        <Button className="inline-flex items-start gap-2 p-3 absolute top-[688px] left-[295px] bg-black-and-whiteblack rounded-xl overflow-hidden hover:bg-black-and-whiteblack/90">
          <img
            className="relative w-9 h-9"
            alt="Reload icon"
            src="/icon-fill-reload.svg"
          />
        </Button>
      </div>
    </main>
  );
};
