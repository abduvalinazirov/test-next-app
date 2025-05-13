"use client";

import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push("/products");
  };

  return (
    <div>
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default BackButton;
