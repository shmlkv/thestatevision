"use client";

import Link from "next/link";
import { useFormState } from "react-dom";
import {
  forgotPasswordAction,
  resetPasswordAction,
} from "../../data/actions/auth-actions";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "../ui/card";

import { StrapiErrors } from "../custom/StrapiErrors";
import { SubmitButton } from "../custom/SubmitButton";
import { ZodErrors } from "../custom/ZodErrors";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const INITIAL_STATE = {
  zodErrors: null,
  strapiErrors: null,
  data: null,
  message: null,
};

export function ForgetPasswordForm({ code }: { code: string }) {
  const formActions = code ? resetPasswordAction : forgotPasswordAction;

  const [formState, formAction] = useFormState(formActions, INITIAL_STATE);
  if (code)
    return (
      <div className="w-full max-w-md">
        <form action={formAction}>
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-3xl font-bold">
                Reset Password
              </CardTitle>
              <CardDescription>Enter your new password</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="password"
                />
                <Input
                  id="code"
                  name="code"
                  type="password"
                  placeholder="password confirmation"
                  value={code}
                  style={{
                    display: "none",
                  }}
                />
                <ZodErrors error={formState?.zodErrors?.password} />
              </div>
              <input type="hidden" name="code" value={code} />
            </CardContent>
            <CardFooter className="flex flex-col">
              <SubmitButton
                className="w-full"
                text="Reset Password"
                loadingText="Loading..."
              />
              <StrapiErrors error={formState?.message} />
              <StrapiErrors error={formState?.strapiErrors} />
            </CardFooter>
          </Card>
        </form>
      </div>
    );
  else
    return (
      <div className="w-full max-w-md">
        <form action={formAction}>
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-3xl font-bold">
                Forgot Password
              </CardTitle>
              <CardDescription>
                Enter your email to reset your password
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="identifier"
                  name="identifier"
                  type="text"
                  placeholder="email"
                />
                <ZodErrors error={formState?.zodErrors?.identifier} />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <SubmitButton
                className="w-full"
                text="Reset Password"
                loadingText="Loading..."
              />
              <div className="">{formState.message}</div>
              <StrapiErrors error={formState?.strapiErrors} />
            </CardFooter>
          </Card>
          <div className="mt-4 text-center text-sm">
            Remember your password?
            <Link className="underline ml-2" href="login">
              Log in
            </Link>
          </div>
        </form>
      </div>
    );
}
