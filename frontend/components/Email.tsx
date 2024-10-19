import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface EmailProps {
  id: string;
  __component: string;
  title: string;
  description: string;
  emailPlaceholder: string;
  submitButton: {
    text: string;
  };
}

const Email: FC<{ data: EmailProps }> = ({ data }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className="bg-background text-foreground py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {data.title}
            </h2>
            <p className="text-muted-foreground max-w-[600px]">
              {data.description}
            </p>
          </div>
          <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
            <Input
              type="email"
              placeholder={data.emailPlaceholder}
              required
              className="w-full"
            />

            <Button type="submit" variant="outline" className={cn("w-full")}>
              {data.submitButton.text} Subscribe to newsletter
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Email;
