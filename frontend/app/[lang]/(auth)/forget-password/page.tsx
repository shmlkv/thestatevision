"use client";
import { ForgetPasswordForm } from "@/components/forms/ForgetPasswordForm";
import { useEffect, useState } from "react";

export default function SignInRoute() {
  const [code, setCode] = useState("");
  useEffect(() => {
    const code = new URLSearchParams(window?.location.search).get("code");
    if (code) {
      setCode(code);
    }
  }, []);
  return <ForgetPasswordForm code={code} />;
}
