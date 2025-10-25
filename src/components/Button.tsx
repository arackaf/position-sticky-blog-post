import { FC, PropsWithChildren } from "react";
import cn from "classnames";

type ButtonProps = {
  onClick: () => void;
  className?: string;
  active?: boolean;
};

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  const { onClick, children, active, className } = props;

  return (
    <button className={cn("border-2 border-gray-300 rounded-md p-2", active ? "bg-gray-400" : "", className)} onClick={onClick}>
      {children}
    </button>
  );
};
