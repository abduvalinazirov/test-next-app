import BackButton from "@/components/BackButton";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  console.log(id);

  return (
    <div>
      page - {id} <BackButton />
    </div>
  );
};

export default page;
