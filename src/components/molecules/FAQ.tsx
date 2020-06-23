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
    <button
      className="block px-6 py-6 mb-6 overflow-hidden text-left rounded shadow cursor-pointer"
      data-cy="faq"
      onClick={() => {
        setOpen(!open);
      }}
    >
      <h3 className="flex items-center justify-between my-2 text-2xl font-semibold">
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
    </button>
  );
};
