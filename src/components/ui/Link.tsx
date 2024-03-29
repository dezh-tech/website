import { cn } from "lib/utils";
import React from "react";

type LinksT = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "default" | "secondary";
};

const Link: React.FC<LinksT> = ({
  variant = "default",
  children,
  className,
  ...restProps
}) => {
  return (
    <a
      className={cn(
        "transition-all duration-300 border-b border-transparent  ",
        {
          "list-item list-disc marker:text-primary  hover:border-primary":
            variant === "primary",
          "list-item list-disc ": variant === "secondary",
          "hover:border-secondary":
            variant === "default" || variant === "secondary",
        },
        className
      )}
      {...restProps}
    >
      {children}
    </a>
  );
};

export default Link;
