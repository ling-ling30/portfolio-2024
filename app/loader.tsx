import NumberTicker from "@/components/magicui/number-ticker";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";
import React from "react";

type Props = {};
const loadingStates = [
  {
    text: "Locating the ‘any’ key...",
  },
  {
    text: "Summoning the hamsters to power the servers...",
  },
  {
    text: "Loading... don't worry, we've got snacks!",
  },
];
export default function Loader({}: Props) {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <MultiStepLoader
        loadingStates={loadingStates}
        loading={true}
        duration={680}
      />
    </div>
  );
}
