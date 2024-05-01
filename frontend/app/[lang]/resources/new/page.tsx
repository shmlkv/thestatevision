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
        Resources
      </h1>
      <div className="w-full space-y-2 flex flex-col">
        <div className="flex space-x-2">
          <Input required placeholder="Title" className="w-full" />
          <Input required placeholder="URL" type="url" />
        </div>
        <Textarea placeholder="Text" />
        <Button
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
  );
}
