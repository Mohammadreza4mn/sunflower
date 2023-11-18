import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IProps } from "@/components/portal/type";

export default function ClientOnlyPortal(props: IProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(props.selector);
    setMounted(true);
  }, [props.selector]);

  return mounted ? createPortal(props.children, ref.current!) : null;
}
