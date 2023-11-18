import { ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: "green" | "gray" | "transparent";
  width: "large" | "full" | "medium";
  children: React.ReactNode;
}

type StyleProps<T> = keyof T;

export type { IProps, StyleProps };
