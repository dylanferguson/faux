import classNames from "classnames";

type MobileMenuToggleProps = {
  open: boolean;
  onClick: () => void;
};

export const MobileMenuToggle = ({ open, onClick }: MobileMenuToggleProps) => (
  <button
    className="mobile-toggle w-8 h-6 ml-6 flex flex-col justify-between"
    aria-label="Menu"
    aria-controls="navigation"
    onClick={onClick}
  >
    <span
      style={open ? { transform: "translate3d(0, 10px, 0) rotate(45deg)" } : {}}
    />
    <span
      className={classNames({ "transform -translate-x-2 opacity-0": open })}
    />
    <span
      style={
        open ? { transform: "translate3d(0, -10px, 0) rotate(-45deg)" } : {}
      }
    />
  </button>
);
