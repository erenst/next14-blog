import { signIn, auth } from "@/lib/auth";
import { handleGithubLogin } from "@/lib/action.js";
import LoginForm from "@/components/loginForm/LoginForm";
import styles from "./login.module.css";
const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with github</button>
        </form>
        {"OR"}
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
