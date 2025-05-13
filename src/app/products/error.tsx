"use client";

import React from "react";

interface IError {
  error: Error;
}

const error = ({ error }: IError) => {
  return <div>{error.message}</div>;
};

export default error;
