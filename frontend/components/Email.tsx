import { Input } from "@/components/ui/input";
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
    <section className="py-12 md:py-16 lg:py-20">
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
              className="w-full px-[14px] py-8 font-xl font-bold rounded-lg border-2 border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 ease-in-out bg-white text-gray-800 placeholder-gray-400 shadow-sm hover:shadow-md"
            />
            <button
              type="submit"
              className="group bg-gradient-to-br w-full from-gray-900 px-4 py-4 to-gray-800 justify-between flex flex-row rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 hover:from-gray-800 hover:to-gray-700 relative overflow-hidden block flex items-center text-purple-400 flex justify-between group-hover:text-purple-300 font-semibold transition-all duration-300 ease-in-out transform group-hover:translate-x-2"
            >
              <div className="">
                {data.submitButton.text} Subscribe to newsletter
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Email;
