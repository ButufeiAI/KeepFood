import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  turbopack: {
    root: __dirname,
  },
   output: "export",
   async rewrites() {
    return [
      {
        source: '/', // the URL you want in browser
        destination: '/login',   // actual page under /pages/index.tsx
      },
     ];
  },


};

export default nextConfig;
