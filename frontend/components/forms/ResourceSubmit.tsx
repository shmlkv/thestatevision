"use client";

import { getStrapiURL } from "@/app/[lang]/utils/api-helpers";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

export default function ResourceSubmit({ user }: any) {
  const { toast } = useToast();
  const token = process.env.NEXT_PUBLIC_STRAPI_FORM_SUBMISSION_TOKEN;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [text, setText] = useState("");
  function handleSubmit() {
    if (!title || !url) {
      toast({
        title: "Error",
        description: "Title and URL are required.",
      });
      return;
    }
    // url validation
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      toast({
        title: "Error",
        description: "URL must start with http:// or https://",
      });
      return;
    }
    toast({
      title: "Submitting...",
      description: "Your resource is being submitted.",
    });

    fetch(getStrapiURL() + "/api/resources", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        data: {
          title,
          URL: url,
          text,
          author: user.id,
        },
      }),
    }).then((res) => {
      console.log({ res });
      if (!res.ok) {
        setErrorMessage(JSON.stringify(res));
        toast({
          title: "Error",
          description: "There was an error submitting your resource.",
        });
        return;
      }
      setTitle("");
      setUrl("");
      setText("");
      toast({


        description: "Resource submitted successfully.",
      });
    });
  }

  return (
    <div className="w-full space-y-2 flex flex-col">
      {/* <div className="flex space-x-2"> */}
      <div className="text-sm font-semibold text-slate-400">Title *</div>

      <Input
        required
        placeholder="Title"
        className="w-full"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <div className="text-sm font-semibold text-slate-400">URL *</div>
      <Input
        required
        placeholder="URL"
        type="url"
        onChange={(e) => setUrl(e.target.value)}
        value={url}
      />
      {/* </div> */}
      <div className="text-sm font-semibold text-slate-400">Text</div>
      <Textarea
        placeholder="Text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="flex w-full">
        <Button
          className="mt-2 w-full"
          variant={"secondary"}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
      {errorMessage}
    </div>
  );
}
