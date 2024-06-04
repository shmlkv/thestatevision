"use client";

import { getStrapiURL } from "@/app/[lang]/utils/api-helpers";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

import { tgNotification } from "@/data/services/tg-notification";
import { useState } from "react";
import { plateToMarkdown } from "slate-mark";
import { PlateEditor } from "../Editor";
const lsKey = "plateEditorContent";

export default function ArticleSubmit({ user }: any) {
  const { toast } = useToast();
  const [initialValue, setInitialValue] = useState(() => {
    if (typeof window === "undefined") return [];
    const saved = localStorage.getItem(lsKey);
    return saved ? JSON.parse(saved) : [];
  });
  const router = useRouter();

  const token = process.env.NEXT_PUBLIC_STRAPI_FORM_SUBMISSION_TOKEN;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  function handleSubmit(data: any) {
    toast({
      title: "Submitting...",
      description: "Your resource is being submitted.",
    });
    console.log(data);
    const markdown = plateToMarkdown(data);

    if (!title) {
      toast({
        title: "Error",
        description: "Please enter a title.",
      });
      return;
    }
    if (!description) {
      toast({
        title: "Error",
        description: "Please enter a description.",
      });
      return;
    }
    if (!markdown) {
      toast({
        title: "Error",
        description: "Please enter a body.",
      });
      return;
    }
    const slug = title.toLowerCase().replace(/ /g, "-");
    fetch(getStrapiURL() + "/api/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        data: {
          title: title,
          description: description,
          slug: slug,
          isPublic: false,
          blocks: [
            {
              id: 18,
              __component: "shared.rich-text",
              body: markdown,
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
      const articleURL = "/articles/undefined/" + slug;
      toast({
        title: "✅ Success",
        description: "Resource submitted successfully.",
      });
      const messageTextMarkdown = `*New article submited*\n\n${title}\n\n${description}\n\n[View article](https://futurestate.tv/en${articleURL})`;
      tgNotification(messageTextMarkdown);
      router.push(articleURL);
    });
  }
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Create new article
      </h1>
      <div className="max-w-[1200px] m-auto space-y-4">
        <div className="">
          <div className="text-sm font-semibold dark:text-slate-400 pb-2">
            Title *
          </div>
          <Input
            required
            placeholder="Title"
            className="w-full"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="">
          <div className="text-sm font-semibold dark:text-slate-400 pb-2">
            Description *
          </div>
          <Input
            required
            placeholder="Description"
            className="w-full"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <div className="">
          <div className="text-sm font-semibold dark:text-slate-400 pb-2">
            Body *
          </div>
          <div className="border rounded border-gray-500">
            <PlateEditor />
          </div>
        </div>
        <Button
          // variant={"primary"}
          onClick={() => {
            const saved = localStorage.getItem(lsKey);
            const data = saved ? JSON.parse(saved) : [];
            handleSubmit(data);
            // console.log({ data });
            // toast({
            //   title: "Not yet",
            //   description: "Your resource has been submitted",
            //   duration: 5000,
            // });
          }}
        >
          Publish
        </Button>
      </div>
    </div>
  );
}
