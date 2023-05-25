import Link from "next/link";
import { ReactNode } from "react";
import styles from "./Button.module.scss";
import { classes } from "@/utility/classes";

interface Props {
  variant?: Button;
  href: string;
  children: string | ReactNode;
  className?: string;
}

const Button = ({ variant, href, children, className }: Props) => {
  let option = "";
  switch (variant) {
    case "primary":
      option = styles.primary;
      break;
    case "secondary":
      option = styles.secondary;
      break;
    case "action":
      option = styles.action;
      break;
    default:
      break;
  }

  return (
    <Link
      href={href}
      className={classes(styles.base, option, className as string)}
    >
      {children}
    </Link>
  );
};

export default Button;
