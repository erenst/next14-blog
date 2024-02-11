"use client";

import { login } from "@/lib/action";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);
  const router = useRouter();
  // useEffect(() => {
  //   state?.success && router.push("/");
  // }, [state?.success, router]);
  return (
    <form action={formAction} className={styles.form}>
      <input type="text" name="username" placeholder="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {state?.error}
      <Link href={"/register"}>
        {"Don't have an account?"}
        <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
