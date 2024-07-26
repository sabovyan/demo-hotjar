"use client";

import Hotjar from "@hotjar/browser";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button
        onClick={() => {
          const siteId = process.env.NEXT_PUBLIC_HOT_JAR_SITE_ID;
          const hotjarVersion = 6;

          if (siteId) {
            Hotjar.init(Number(siteId), hotjarVersion, {
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
