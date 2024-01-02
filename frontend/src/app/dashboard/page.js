"use client";
import { useAll } from "@/components/providers/AuthProvider";
import Header from "./dashboardHeader";
import Main from "./main";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { isLoggedIn } = useAll();

  useEffect(() => {
    if (!isLoggedIn) router.push("/");
  }, [isLoggedIn, router]);

  return (
    <div className="bg-[#F3F4F6] px-5">
      <Header />
      <Main />
    </div>
  );
}
