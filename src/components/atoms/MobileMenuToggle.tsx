import classNames from "classnames";

type MobileMenuToggleProps = {
  open: boolean;
  onClick: () => void;
};

export const MobileMenuToggle = ({ open, onClick }: MobileMenuToggleProps) => (
  <button
    className="flex flex-col justify-between w-8 h-6 ml-6 mobile-toggle group"
    onClick={onClick}
    aria-label={open ? "Close mobile menu" : "Open mobile menu"}
  >
    <span
      className="group-hover:bg-indigo-400"
      style={open ? { transform: "translate3d(0, 10px, 0) rotate(45deg)" } : {}}
    />
    <span
      className={classNames(
        { "transform -translate-x-2 opacity-0": open },
        "group-hover:bg-indigo-400"
      )}
    />
    <span
      className="group-hover:bg-indigo-400"
      style={
        open ? { transform: "translate3d(0, -10px, 0) rotate(-45deg)" } : {}
      }
    />
  </button>
);
