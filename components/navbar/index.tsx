import Button from "@/components/button";
import styles from "@/components/navbar/styles";
import { IProps } from "@/components/navbar/type";
import { getCookie } from "@/utils/cookie";
import { config } from "@/utils/environment";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar(props: IProps) {
  const style = styles();

  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    const cookie = getCookie(config.authenticationCookieName as string);
    setUsername(cookie ? JSON.parse(cookie)?.userName : "");
  }, []);

  return (
    <nav className={style.main}>
      <div className={style.containerButton}>
        <Button
          type="button"
          color="transparent"
          width="medium"
          onClick={props.handleSignOut}
          className="flex items-center gap-2 text-red-500"
        >
          خروج
          <Image src="/img/signOut.svg" alt="signOut" width={20} height={10} />
        </Button>
        <span>{username}</span>
        <Button
          type="button"
          color="green"
          width="large"
          onClick={props.showModalAddProduct}
          className="flex items-center justify-center gap-2 text-white"
        >
          افزودن محصول
          <Image src="/img/plus.svg" alt="plus" width={20} height={10} />
        </Button>
      </div>
      <h2 className="font-semibold">لیست محصولات</h2>
    </nav>
  );
}
