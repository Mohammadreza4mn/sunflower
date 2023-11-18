import { FormEventHandler } from "react";

interface IProps {
  onSubmit: FormEventHandler<HTMLFormElement>;
}

interface IForm {
  password: { value: string };
  username: { value: string };
}

export type { IProps, IForm };
