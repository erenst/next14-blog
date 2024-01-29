import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Sorry, the page you are looking for is missing...</p>
      <Link href="/">Home</Link>
    </div>
  );
};

export default NotFoundPage;
