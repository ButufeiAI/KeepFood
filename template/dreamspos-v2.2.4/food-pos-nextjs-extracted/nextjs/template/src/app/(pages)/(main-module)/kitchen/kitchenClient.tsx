"use client";
import dynamic from "next/dynamic";
const KitchenComponent = dynamic(
  () => import("@/components/pages/main-module/kitchen/kitchen"),
  { 
    ssr: false,
    loading: () => <p>Loading dashboard...</p>
  }
);
export default function KitchenClient() {
  return (
    <>
      <KitchenComponent />
    </>
  );
}
