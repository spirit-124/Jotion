"use client";

import { Spinner } from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import Navigation from "./_components/navigation";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  if (isLoading) {
    <div className="flex justify-center items-center h-full">
      <Spinner size="lg" />
    </div>;
  }
  if (!isAuthenticated) {
    redirect("/");
  }
  return (
    <div className="h-full flex  dark:bg-[#1F1F1F]">
      <Navigation />
      <main className="h-full overflow-y-auto flex-1">{children}</main>
    </div>
  );
};

export default MainLayout;
