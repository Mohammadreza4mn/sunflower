import styles from "@/components/productCard/styles";
import { IProps } from "@/components/productCard/type";

export default function ProductCard(props: IProps) {
  const style = styles();

  return (
    <div className={style.main}>
      <img src={props.imageUrl} className={style.img} alt={props.title} />

      <div className={style.containerText}>
        <strong>{props.title}</strong>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
