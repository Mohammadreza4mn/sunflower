import { cloneElement, useState, ChangeEventHandler } from "react";
import { IProps, IInputProps } from "@/components/input/type";
import styles from "@/components/input/styles";

const style = styles();

export default function Input(props: IInputProps) {
  return (
    <div className={style.main}>
      <label htmlFor={props.name}>{props.label}</label>
      {cloneElement(props.children, { name: props.name })}
    </div>
  );
}

function Text(props: IProps<HTMLInputElement>) {
  return <input {...props} id={props.name} className={style.input} />;
}

function Textarea(props: IProps<HTMLTextAreaElement>) {
  const attributes = {
    ...props,
    rows: 5,
  };

  return (
    <textarea {...attributes} id={props.name} className={style.textarea} />
  );
}

function Checkbox(props: IProps<HTMLInputElement>) {
  const { children, ...attributes } = props;

  const className = `${style.checkbox.main} ${props.className}`;

  return (
    <label className={className}>
      <input {...attributes} type="checkbox" className={style.checkbox.input} />
      {children}
    </label>
  );
}

function File(props: IProps<HTMLInputElement>) {
  const [fileName, setFileName] = useState<string>("");

  const handleFileName: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (!event.target.files?.length) return;
    setFileName(event.target.files[0].name);
  };
  return (
    <label className={style.file.main}>
      <span className={style.file.input}>{fileName}</span>
      <input
        {...props}
        type="file"
        className="hidden"
        onChange={handleFileName}
      />
      <span className={style.file.btn}>انتخاب فایل</span>
    </label>
  );
}

Input.Text = Text;
Input.File = File;
Input.Textarea = Textarea;
Input.Checkbox = Checkbox;
