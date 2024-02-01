import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>LamaDev</div>
      <div className={styles.text}>
        Lama creative thought angency &copy; All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
