import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/products">products</Link>
        </li>
        <li>
          <Link href="/saved">saved</Link>
        </li>
        <li>
          <Link href="/history">history</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
