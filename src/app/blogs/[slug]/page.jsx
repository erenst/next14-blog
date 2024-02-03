"use client";
import Image from "next/image";
import styles from "./singlePost.module.css";
import { useParams } from "next/navigation";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const SinglePage = async () => {
  const { slug } = useParams();
  const post = await getData(slug);
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
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/7533956/pexels-photo-7533956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="avatar"
            width={50}
            height={50}
            className={styles.avatar}
          />
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailvalue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          <p>{post.body}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
