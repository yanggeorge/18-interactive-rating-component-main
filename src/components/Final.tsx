import { useAtom } from "jotai";

import IconThankYou from "@/assets/icons/illustration-thank-you.svg?react";
import { scoreAtom } from "@/atoms";

const Final = () => {
  const [score, _] = useAtom(scoreAtom);
  return (
    <div className="w-81.75 h-90 p-6 flex flex-col gap-6 items-center bg-grey-950 rounded-2xl md:w-103 md:h-104 md:px-8 md:py-10 md:gap-8">
      <div>
        <IconThankYou />
      </div>
      <div className="w-42 h-8 rounded-[22.5px] bg-grey-900 flex justify-center items-center typography-5-reg text-orange-500 leading-none md:w-48.25 md:typography-4-reg md:leading-none">
        You selected {score} out of 5
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="typography-2 text-white md:typography-1">
          Thank you!
        </div>
        <div className="typography-5-reg text-grey-500 text-center md:typography-4-reg">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </div>
      </div>
    </div>
  );
};

export default Final;
