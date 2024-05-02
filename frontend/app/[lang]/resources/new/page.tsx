"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export default async function Resources() {
  const { toast } = useToast();

  return (
    <div className="w-full">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Add new resource
      </h1>
      <div className="w-full space-y-2 flex flex-col">
        {/* <div className="flex space-x-2"> */}
        <div className="text-sm font-semibold text-slate-400">Title *</div>

        <Input required placeholder="Title" className="w-full" />
        <div className="text-sm font-semibold text-slate-400">URL *</div>
        <Input required placeholder="URL" type="url" />
        {/* </div> */}
        <div className="text-sm font-semibold text-slate-400">Text</div>
        <Textarea placeholder="Text" />
        <div className="flex w-full">
          <Button
            className="mt-2 w-full"
            variant={"secondary"}
            onClick={() =>
              toast({
                title: "Not yet",
                description: "Your resource has been submitted",
                duration: 5000,
              })
            }
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
