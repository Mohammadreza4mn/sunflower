interface IProps {
  page: number;
  count: number;
  separatorRange: number;
  className?: string;
  onPageChange: (_page: number) => void;
}

export type { IProps };
