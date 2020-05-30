import { useState } from "react";
import classNames from "classnames";

import { Icon } from "components/atoms";

type FAQProps = {
  question: string;
  answer: string;
};

export const FAQ = ({ question, answer }: FAQProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="text-left mb-6 cursor-pointer rounded shadow px-6 py-6 overflow-hidden"
      data-cy="faq"
      onClick={() => {
        setOpen(!open);
      }}
    >
      <h3 className="text-2xl font-semibold my-2 flex items-center justify-between">
        {question}
        <Icon
          id="chevronDown"
          className={classNames(
            "transition-transform duration-300 ease-in-out transform w-6 h-6 flex-none ml-6 fill-current text-indigo-500",
            {
              "rotate-180": open,
            }
          )}
        />
      </h3>
      <p
        className={classNames(
          "transition-all duration-300 ease-in-out text-gray-700 leading-normal text-xl leading-relaxed mt-2",
          { "opacity-0": !open }
        )}
        style={{ maxHeight: open ? "400px" : "0" }}
      >
        {answer}
      </p>
    </div>
  );
};
