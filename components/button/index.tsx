import styles from "@/components/button/styles";
import { IProps } from "@/components/button/type";

export default function Button(props: IProps) {
  const style = styles(props.color, props.width);

  const className = `${style.main} ${props.className}`;

  return (
    <button {...props} className={className}>
      {props.children}
    </button>
  );
}
