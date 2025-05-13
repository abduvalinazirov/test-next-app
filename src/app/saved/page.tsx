import React from "react";
import styles from "./style.module.css";
import BackButton from "@/components/BackButton";

const Saved = () => {
  console.log(process.env.API_URL);
  console.log(process.env.NEXT_PUBLIC_NEXT_URL);

  return (
    <div>
      <BackButton />
      <p className={styles["text-name"]}>Saved</p>
    </div>
  );
};

export default Saved;
