import { Metadata } from "next";
import React from "react";

export async function generateMetadata({ params }) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/5");
  const post = await res.json();

  return {
    title: post.title,
    description: "descr",
    openGraph: {
      title: post.title,
      description: post.body,
      type: "article",
      url: `https://yourdomain.com/posts/${params.slug}`,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

const SavedLayout = ({ children, managed, unmanaged }) => {
  return (
    <div>
      <h2>saved layout</h2>
      {managed}
      {children}
      {unmanaged}
    </div>
  );
};

export default SavedLayout;
