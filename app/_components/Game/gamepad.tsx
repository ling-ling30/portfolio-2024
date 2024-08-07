import { ResetIcon } from "@radix-ui/react-icons";
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";

export const Gamepad = ({
  onButtonPress,
}: {
  onButtonPress: (key: string) => void;
}) => {
  const handleTouchStart = (key: string) => {
    console.log(`${key} pressed`);
    onButtonPress(key);
  };

  return (
    <div className="absolute flex flex-col items-center justify-center bg-transparent z-10 right-0 bottom-0">
      <button
        className="size-8 m-1 bg-gray-800/30 rounded focus:outline-none"
        onTouchStart={() => handleTouchStart(" ")}
      >
        <ResetIcon />
      </button>
      <div className="flex flex-col justify-center items-center mb-4">
        <button
          className="size-8 m-1 bg-gray-800/30 rounded focus:outline-none"
          onTouchStart={() => handleTouchStart("ArrowUp")}
        >
          <ArrowUp />
        </button>
        <div className="flex ">
          <button
            className="size-8 m-1 bg-gray-800/30 rounded focus:outline-none"
            onTouchStart={() => handleTouchStart("ArrowLeft")}
          >
            <ArrowLeft />
          </button>
          <button
            className="size-8 m-1 bg-gray-800/30 rounded focus:outline-none"
            onTouchStart={() => handleTouchStart("ArrowDown")}
          >
            <ArrowDown />
          </button>
          <button
            className="size-8 m-1 bg-gray-800/30 rounded focus:outline-none"
            onTouchStart={() => handleTouchStart("ArrowRight")}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};
