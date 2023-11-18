import styles from "@/components/pagination/styles";
import { IProps } from "@/components/pagination/type";

export default function Pagination(props: IProps) {
  const style = styles();

  const handleChangePage = {
    previous: () => {
      if (props.page === 1) return;
      props.onPageChange(props.page - 1);
    },
    next: () => {
      if (props.page === props.count) return;
      props.onPageChange(props.page + 1);
    },
  };

  const handleToPage = (number: number) => props.onPageChange(number);

  const makeArrayFromCount = ({ count, page }: Record<string, number>) => {
    const array: number[] = Array.from({ length: count }, (_, i) => i + 1);

    if (array.length <= props.separatorRange) return array;

    if (page < array.length / 2) {
      return [
        ...(page + 2 >= 6 ? [array.at(0)] : []),
        ...(page + 2 >= 7 ? ["..."] : []),
        ...array.slice(page - 3 < 0 ? 0 : page - 3, page + 2),
        "...",
        array.at(-1),
      ];
    } else {
      return [
        array.at(0),
        "...",
        ...array.slice(page - 3, page + 2),
        ...(page + 3 < array.length ? ["..."] : []),
        ...(page + 2 < array.length ? [array.at(-1)] : []),
      ];
    }
  };

  const makeCounter = makeArrayFromCount({
    count: props.count,
    page: props.page,
  }).map((item) =>
    item === "..." ? (
      <li key={item}>
        <span className={style.count.default}>{item}</span>
      </li>
    ) : (
      <li key={item} onClick={() => handleToPage(item as number)}>
        <span
          className={`${
            style.count[item === props.page ? "active" : "default"]
          }`}
        >
          {item}
        </span>
      </li>
    )
  );

  const makeIcon = (direction: keyof typeof handleChangePage) => (
    <li onClick={() => handleChangePage[direction]()}>
      <span className={`${style.buttonIcon[direction]}`}>
        {direction === "previous" ? (
          <img src="/img/left.svg" alt="left" />
        ) : (
          <img src="/img/right.svg" alt="right" />
        )}
      </span>
    </li>
  );

  const makeButton = {
    next: makeIcon("next"),
    previous: makeIcon("previous"),
  };
  return (
    <nav dir="ltr" className={props.className}>
      <ul className="inline-flex items-center -space-x-px">
        {makeButton.previous}
        {makeCounter}
        {makeButton.next}
      </ul>
    </nav>
  );
}
