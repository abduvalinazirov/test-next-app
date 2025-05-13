import BackButton from "@/components/BackButton";
import React from "react";

const page = async ({ params }: any) => {
  const { id } = await params;

  return (
    <div>
      page - {id} <BackButton />
    </div>
  );
};

export default page;
