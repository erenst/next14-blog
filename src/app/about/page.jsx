import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};
const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Angency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
          tempore odit quaerat, animi accusamus recusandae? Maxime eligendi
          rerum explicabo reprehenderit. Officiis quod rem id pariatur?
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h3>10 K+</h3>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h3>234 K+</h3>
            <p>People reached</p>
          </div>
          <div className={styles.box}>
            <h3>5 K+</h3>
            <p>Service and plugins</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="about image" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
