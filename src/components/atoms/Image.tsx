import { useState } from "react";
import classNames from "classnames";

type ImageProps = {
  src: string;
  alt?: string;
};

export const Image = ({ src, alt = "" }: ImageProps) => {
  const [modal, setModal] = useState(false);

  return (
    <div
      className={classNames({
        "fixed flex items-center justify-center top-0 left-0 z-30 w-screen h-screen bg-opacity-50 bg-black": modal,
      })}
    >
      <img
        className={classNames("rounded-lg cursor-pointer", {
          "py-4 max-h-screen w-auto": modal,
        })}
        loading="lazy"
        alt={alt}
        src={src}
        onClick={() => setModal(!modal)}
      />
    </div>
  );
};
