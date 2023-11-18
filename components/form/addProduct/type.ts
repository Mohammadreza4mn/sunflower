import { FormEventHandler } from "react";

interface IProps {
  onSubmit: FormEventHandler<HTMLFormElement>;
  onCancel: () => void;
}

interface IForm {
  ProductTitle: { value: string };
  ProductPrice: { value: string };
  Description: { value: string };
  file: { files: string[] };
}

export type { IProps, IForm };
