import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/19986439/pexels-photo-19986439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="post image"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/7533956/pexels-photo-7533956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="avatar"
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Erenst Lin</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailvalue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatum, quis?Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Voluptatum excepturi dicta, praesentium repudiandae optio
            impedit! Expedita hic esse et. Inventore!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
