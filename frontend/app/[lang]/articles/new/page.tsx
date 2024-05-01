"use client";
import { PlateEditor } from "@/components/Editor";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export default async function NewArtile({}: {}) {
  const { toast } = useToast();

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Create new article
      </h1>
      <div className="max-w-[1200px] m-auto">
        <PlateEditor />
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
