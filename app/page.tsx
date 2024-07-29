"use client";

import Hotjar from "@hotjar/browser";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button
        className="border border-black rounded p-2"
        onClick={() => {
          const siteId = process.env.NEXT_PUBLIC_HOT_JAR_SITE_ID;
          const HOT_JAR_VERSION = 6;

          if (siteId) {
            Hotjar.init(Number(siteId), HOT_JAR_VERSION, {
              debug: true,
            });
          } else {
            console.error("site id not found");
          }
        }}
      >
        try hot jar
      </button>
    </main>
  );
}
