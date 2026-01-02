"use client";

import dynamic from "next/dynamic";

const PosComponent = dynamic(
  () => import("@/components/pages/main-module/pos/pos"),
  { 
    ssr: false,
    loading: () => <p>Loading dashboard...</p>
  }
);
export default function PosClient(){
    return(
        <><PosComponent/></>
    )
}