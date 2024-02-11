"use client";

import { register } from "@/lib/action";
import styles from "./registerForm.module.css";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();
  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);
  return (
    <form action={formAction} className={styles.form}>
      <input type="text" name="username" placeholder="username" />
      <input type="email" name="email" placeholder="email" />
      <input type="password" placeholder="password" name="password" />
      <input
        type="password"
        placeholder="Repeat your password"
        name="passwordRepeat"
      />
      <button>Register</button>
      {state?.error}
      <Link href={"/login"}>
        Have an account?<b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
