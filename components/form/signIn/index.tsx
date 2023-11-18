import Button from "@/components/button";
import styles from "@/components/form/signIn/styles";
import { IProps } from "@/components/form/signIn/type";
import Input from "@/components/input";

export default function SignIn(props: IProps) {
  const style = styles();

  return (
    <form dir="rtl" className={style.main} onSubmit={props.onSubmit}>
      <Input name="username" label="نام کاربری">
        <Input.Text dir="ltr" placeholder="نام کاربری..." />
      </Input>
      <Input name="password" label="کلمه عبور">
        <Input.Text dir="ltr" type="password" placeholder="کلمه عبور..." />
      </Input>
      <Input.Checkbox className="text-sky-500">
        مرا به خاطر بسپار
      </Input.Checkbox>
      <Button color="green" width="full" className="text-white mt-4">
        ورود
      </Button>
    </form>
  );
}
