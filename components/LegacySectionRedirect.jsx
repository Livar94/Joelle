"use client";

import { useEffect } from "react";

// Preserve existing bookmarks while keeping all content on the home page.
export default function LegacySectionRedirect({ section }) {
  useEffect(() => {
    window.location.replace(`/#${section}`);
  }, [section]);

  return (
    <p className="px-6 py-20 text-center">
      <a href={`/#${section}`} className="font-bold text-sky-700 underline">
        انتقل إلى القسم على الصفحة الرئيسية
      </a>
    </p>
  );
}
