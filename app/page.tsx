"use client";

import Hotjar from "@hotjar/browser";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const siteId = process.env.NEXT_PUBLIC_HOT_JAR_SITE_ID;
    const HOT_JAR_VERSION = 6;

    if (siteId) {
      Hotjar.init(Number(siteId), HOT_JAR_VERSION, {
        debug: true,
      });
    } else {
      console.error("site id not found");
    }
  }, []);

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <button
        className="border border-black rounded p-2"
        onClick={() => {
          const hotjarButton = document.querySelector<HTMLButtonElement>(
            "#_hj_feedback_container button",
          );

          hotjarButton && hotjarButton.click();
        }}
      >
        try hot jar
      </button>
    </main>
  );
}
