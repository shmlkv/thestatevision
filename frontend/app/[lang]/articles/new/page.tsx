"use client";
import { PlateEditor } from "@/components/Editor";

export default async function NewArtile({}: {}) {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Create new article
      </h1>
      <div className="max-w-[1200px] m-auto">
        <PlateEditor />
      </div>
    </div>
  );
}
