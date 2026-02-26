import { useAtom } from "jotai";
import { useState } from "react";

import IconStart from "@/assets/icons/icon-star.svg?react";
import { scoreAtom } from "@/atoms";
import { cn } from "@/utils/cn";

const Card = () => {
  const [_, setScore] = useAtom(scoreAtom);
  const [value, setValue] = useState(0);

  const handleSubmit = () => {
    if (value > 0) {
      setScore(value);
    }
  };

  return (
    <div className="w-81.75 h-90 p-6 flex flex-col gap-6 md:gap-8 items-start bg-grey-950 rounded-2xl md:w-103 md:h-104 md:py-8">
      <div className="rounded-full bg-grey-900 h-10 w-10 md:h-12 md:w-12 grid place-items-center">
        <IconStart />
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-white typography-2 md:typography-1">
          How did we do?
        </h1>
        <p className="text-grey-500 typography-5-reg md:typography-4-reg">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="flex gap-4 self-center md:gap-6">
          {[1, 2, 3, 4, 5].map((item) => {
            return (
              <button
                key={item}
                className={cn(
                  // 1. 基础布局：固定宽高、圆角、居中、字体
                  "flex items-center justify-center h-10.5 w-10.5 rounded-full typography-5-bold transition-colors cursor-pointer",

                  // 2. 视觉修正：消除行高、间距干扰，并向下微调 2px (pt-0.5)
                  "leading-none tracking-normal pt-0.5",
                  "md:h-12.75 md:w-12.75 md:typography-3",

                  // 3. 状态颜色：根据是否选中切换
                  item === value
                    ? "bg-white text-grey-900"
                    : "bg-grey-900 text-grey-500 hover:bg-orange-500 hover:text-grey-900",
                )}
                onClick={() => {
                  setValue(item);
                }}
              >
                <span>{item}</span>
              </button>
            );
          })}
        </div>
      </div>

      <button
        className={cn(
          "w-full h-11.25 p-4 grid place-items-center text-grey-950 typography-5-bold rounded-3xl cursor-pointer",
          value === 0 ? "bg-orange-500" : "bg-white",
        )}
        onClick={handleSubmit}
      >
        SUBMIT
      </button>
    </div>
  );
};

export default Card;
