import Image from "next/image";
import React from "react";

const History = () => {
  return (
    <div>
      <h1>History</h1>
      <div style={{ width: "100%", height: "900px", position: "relative" }}>
        <Image
          objectFit="cover"
          objectPosition="center -370px"
          layout="fill"
          alt="Lambargini"
          quality={100}
          src={"https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_2992,h_1683,c_limit/DSC_5903.jpg"}
        />
      </div>
    </div>
  );
};

export default History;
