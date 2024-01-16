"use client";
import { useRouter } from "next/navigation";
import Header from "./recordHeader";
import Main from "./recordMain";
import { useEffect } from "react";
import { useAll } from "@/components/providers/AuthProvider";

export default function Home() {
  const router = useRouter();
  const { isLoggedIn } = useAll();

  useEffect(() => {
    if (!isLoggedIn) router.push("/");
  }, [isLoggedIn, router]);
  return (
    <div className=" px-5">
      <Header />
      <Main />
    </div>
  );
}
