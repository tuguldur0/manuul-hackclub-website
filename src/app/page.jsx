"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [step, setStep] = useState(0);
  const [cursorBlink, setCursorBlink] = useState(true);

  useEffect(() => {
    document.title = "Manuul Hack Club";
  }, []);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorBlink((prev) => !prev);
    }, 400);
    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 670), //  hehe 67 whoami
      setTimeout(() => setStep(2), 1000), // output
      setTimeout(() => setStep(3), 2000), // cat
      setTimeout(() => setStep(4), 2670), // output
      setTimeout(() => setStep(5), 3500), // join_club.sh
      setTimeout(() => setStep(6), 4000), // join button
      setTimeout(() => setStep(7), 4500), // active blinking cursor
    ];
    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  const Prompt = () => (
    <span className="mr-3 font-bold select-none">
      <span className="text-[#FF4500]">{"->"}</span>{" "}
      <span className="text-[#FFFFFF]">manuul-hackclub@root</span>
      <span className="text-[#999999]">:~$</span>
    </span>
  );

  return (
    <div className="min-h-screen bg-[#121212] font-mono text-[#FFFFFF] p-4 md:p-8 flex items-center justify-center selection:bg-[#FF4500]/30 selection:text-[#FFFFFF]">
      <div className="w-full max-w-3xl bg-[#121212]/90 backdrop-blur-md rounded-md overflow-hidden shadow-2xl border-2 border-[#262626] flex flex-col h-[85vh] md:h-auto">
        <div className="p-5 md:p-8 text-sm md:text-base space-y-5 overflow-y-auto max-h-[80vh] grow [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="text-[#999999] opacity-70">Starting...</div>

          {step > 0 && (
            <div className="animate-fade-in">
              <Prompt />
              <span className="text-[#FFFFFF]">whoami</span>
            </div>
          )}

          {step > 1 && (
            <div className="text-[#999999] pl-4 md:pl-6 border-l-2 border-[#262626] animate-fade-in py-1">
              <pre>
                {`Manuul Hack Club: A student-led engineering club based in 
Ulaanbaatar, Mongolia.
[INFO]
- What we do: Custom hardware, Web development, Software, and everything
  in between.
- Venue     : American Corner Ulaanbaatar
- Schedule  : Weekly workshops & hack sessions
- Access    : Open to all students 13-18 (no experience required)`}
              </pre>
            </div>
          )}

          {step > 2 && (
            <div className="animate-fade-in">
              <Prompt />
              <span className="text-[#FFFFFF]">cat projects.json</span>
            </div>
          )}

          {step > 3 && (
            <div className="text-[#999999] animate-fade-in mt-2">
              <pre className="whitespace-pre-wrap leading-relaxed text-xs md:text-sm bg-[#262626]/30 p-4 rounded-sm border border-[#262626]">
                {`[
  {
    "name": "Manuul56HW",
    "status": "completed",
    "description":"The Manuul56HW is a handwired, 56 key, alice ergonomic layout mechanical keyboard. It features a 3D printed PETG case, Black Pill STM32F411CEU6 microcontroller, and refurbished switches, making it incredibly affordable."
  },
  {
    "name": "Boba Drops Workshop",
    "status": "planned",
    "description":"Build a website and get free stickers and a grant to get free Boba funded by Hack Club!"
  }
]`}
              </pre>
            </div>
          )}

          {step > 4 && (
            <div className="animate-fade-in">
              <Prompt />
              <span className="text-[#FFFFFF]">./join_club.sh</span>
            </div>
          )}

          {step > 5 && (
            <div className="pt-4 pb-4 animate-fade-in">
              <button
                onClick={() =>
                  (window.location.href =
                    "https://docs.google.com/forms/d/e/1FAIpQLSfGijj4QvcHkYPE2CGAeol_XS0ev60Zh2rYFfHG1sQwFjv1Xw/viewform?usp=dialog")
                }
                className="hover:cursor-pointer group relative inline-flex items-center justify-center px-8 py-3 font-bold tracking-widest text-[#FFFFFF] bg-[#FF4500] rounded-sm hover:bg-[#FFFFFF] hover:text-[#121212] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF4500] focus:ring-offset-2 focus:ring-offset-[#121212]"
              >
                <span>join club</span>
              </button>
            </div>
          )}

          {step > 6 && (
            <div className="flex items-center pt-2 pb-6 animate-fade-in">
              <Prompt />
              <span
                className={`inline-block w-2.5 h-5 bg-[#FF4500] ml-1 transition-opacity duration-75 ${
                  cursorBlink ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          )}
        </div>
        <div className="flex items-center bg-[#262626]/50 border-t border-[#262626] text-xs select-none mt-auto">
          <div className="px-4 py-1.5 bg-[#FF4500]/10 text-[#FF4500] border-t-2 border-[#FF4500] flex items-center space-x-2">
            <span>1</span>
            <span>bash</span>
          </div>
          <div className="grow"></div>
        </div>
      </div>
    </div>
  );
}
