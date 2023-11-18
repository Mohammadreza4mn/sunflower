import { FormEvent } from "react";
import { useDispatch, useSelector } from "@/redux/store";
import { signInAsync } from "@/redux/slices/auth/actionsThunk";
import Image from "next/image";
import { selectAuth } from "@/redux/slices/auth/selectors";
import { default as SignInForm } from "@/components/form/signIn";
import { IForm } from "@/components/form/signIn/type";

export default function SignIn() {
  const dispatch = useDispatch();
  const { successful } = useSelector(selectAuth);

  const handleSignIn = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.target as typeof event.target & IForm;

    dispatch(
      signInAsync({
        passWord: target.password.value,
        userName: target.username.value,
      })
    );
  };

  return (
    <main className="grid place-content-center w-screen h-screen">
      <div className="flex items-center flex-wrap justify-center">
        <div className="flex flex-col items-center">
          <Image
            src="/img/favicon.jpg"
            alt="favicon"
            width={100}
            height={100}
          />
          {successful ? (
            <div className="flex flex-col items-center mt-14 gap-4 rounded-2xl px-28 border border-gray-400 py-20 ">
              <Image
                src="/img/successful.jpg"
                alt="successful"
                width={50}
                height={50}
              />
              <span className="text-green-600">
                ورود شما با موفقیت انجام شد
              </span>
              <Image
                src="/img/loading.jpg"
                className="animate-spin"
                alt="loading"
                width={50}
                height={50}
              />
            </div>
          ) : (
            <SignInForm onSubmit={handleSignIn} />
          )}
        </div>
        <Image
          src="/img/userSignIn.jpg"
          alt="userSignIn"
          width={600}
          height={600}
        />
      </div>
    </main>
  );
}
