"use client";
import { PlateEditor } from "@/components/Editor";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { getStrapiURL } from "../../../utils/api-helpers";
const lsKey = "plateEditorContent";

export default async function NewArtile({}: {}) {
  const { toast } = useToast();
  const [initialValue, setInitialValue] = useState(() => {
    if (typeof window === "undefined") return [];
    const saved = localStorage.getItem(lsKey);
    return saved ? JSON.parse(saved) : [];
  });
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  function handleSubmit() {
    toast({
      title: "Submitting...",
      description: "Your resource is being submitted.",
    });
    fetch(getStrapiURL() + "/api/article", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        data: {
          title: "New Article",
          description: "test",
          slug: "test",
          blocks: [
            {
              id: 18,
              __component: "shared.rich-text",
              body: `## test`,
            },
          ],
        },
      }),
    }).then((res) => {
      console.log({ res });
      if (!res.ok) {
        toast({
          title: "Error",
          description: "There was an error submitting your resource.",
        });
        return;
      }
      toast({
        title: "✅ Success",
        description: "Resource submitted successfully.",
      });
    });
  }
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Create new article
      </h1>
      <div className="max-w-[1200px] m-auto">
        <PlateEditor />
        <Button
          variant={"secondary"}
          onClick={() => {
            handleSubmit();
            // const saved = localStorage.getItem(lsKey);
            // const data = saved ? JSON.parse(saved) : [];
            // console.log({ data });
            // toast({
            //   title: "Not yet",
            //   description: "Your resource has been submitted",
            //   duration: 5000,
            // });
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
