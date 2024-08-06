import NumberTicker from "@/components/magicui/number-ticker";
import React from "react";

type Props = {};

export default function Loader({}: Props) {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <p className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white">
        <NumberTicker value={100} />
      </p>
    </div>
  );
}
