import ClientOnlyPortal from "@/components/portal/clientOnlyPortal";
import styles from "@/components/modal/styles";
import { IProps } from "@/components/modal/type";

export default function Modal(props: IProps) {
  const style = styles();

  return (
    props.open && (
      <ClientOnlyPortal selector="#modal">
        <div onClick={props.handleClose} className={style.main}>
          <div className={style.container}>
            <button type="button" onClick={props.handleClose}>
              ✖
            </button>
            <div
              className="h-full"
              onClick={(event) => event.stopPropagation()}
            >
              {props.children}
            </div>
          </div>
        </div>
      </ClientOnlyPortal>
    )
  );
}
