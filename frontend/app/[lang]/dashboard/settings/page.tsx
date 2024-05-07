"use client";
import { useEffect, useState } from "react";

export default async function AccountRoute() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const getPreferredScheme = () =>
    window?.matchMedia?.("(prefers-color-scheme:dark)")?.matches
      ? "dark"
      : "light";
  useEffect(() => {
    console.log({ getPreferredScheme: getPreferredScheme() });
    setTheme(getPreferredScheme());
  }, []);
  const handleThemeChange = (e: any) => {
    const value = e.target.value;
    console.log({ value });
    setTheme(value);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(value);
  };
  return (
    <div className="space-y-2 p-4">
      {/* <h1 className="text-3xl">Theme</h1>
      <p className="text-gray-500">
        Change the look of the app by selecting a theme
      </p>
      <RadioGroup
        defaultValue={theme}
        value={theme}
        onChange={handleThemeChange}
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="dark" id="dark" />
          <Label htmlFor="option-one">Dark</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="light" id="light" />
          <Label htmlFor="option-two">Light</Label>
        </div>
      </RadioGroup> */}
    </div>
  );
}
