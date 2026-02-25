import IconStart from "@/assets/icons/icon-star.svg?react";
const Card = () => {
  return (
    <div className="w-81.75 h-90 p-6 flex flex-col gap-6 items-start bg-grey-950 rounded-2xl">
      <div className="rounded-full bg-grey-900 h-10 w-10 grid place-items-center">
        <IconStart />
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-white text-preset2">How did we do?</h1>
        <p className="text-grey-500 text-preset5-reg">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="flex gap-4 self-center">
          {[1, 2, 3, 4, 5].map((item) => {
            return (
              <button
                key={item}
                className="grid place-items-center h-10.5 w-10.5 rounded-full bg-grey-900 text-grey-500 text-preset5-bold"
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>

      <button className="w-full h-11.25 p-4 grid place-items-center bg-orange-500 text-grey-950 text-preset5-bold rounded-3xl">
        Submit
      </button>
    </div>
  );
};

export default Card;
