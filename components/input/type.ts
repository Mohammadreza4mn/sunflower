import { InputHTMLAttributes } from "react";

interface IInputProps {
  name: string;
  label: string;
  children: JSX.Element;
}

interface IProps<E> extends InputHTMLAttributes<E> {}

export type { IProps, IInputProps };
