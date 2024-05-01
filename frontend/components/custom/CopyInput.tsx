"use client";

import { Button } from "@radix-ui/react-toolbar";
import { Copy } from "lucide-react";
import { Input } from "../ui/input";
const copy = ()=>{

}
export function CopyInput({ text }: any) {
  return (
    <div className="flex items-center relative">
      <Input type="text" placeholder={text} value={text} />
      <Button
        className="ml-2"
        onClick={() => {
          navigator.clipboard.writeText(text);
        }}
      >
        <Copy />
      </Button>
    </div>
  );
}
