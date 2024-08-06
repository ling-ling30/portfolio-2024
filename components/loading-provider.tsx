"use client";
import Loader from "@/app/loader";
import React, { useEffect, useState } from "react";

type Props = { children: React.ReactNode };

function LoadingProviders({ children }: Props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const Interval = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLoading(false);
    };

    Interval();
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return <>{children}</>;
}

export default LoadingProviders;
