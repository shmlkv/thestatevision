"use client";

import { useFormState } from "react-dom";

import { cn } from "@/lib/utils";
import { updateProfileAction } from "../../data/actions/profile-actions";
import { StrapiErrors } from "../custom/StrapiErrors";
import { SubmitButton } from "../custom/SubmitButton";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const INITIAL_STATE = {
  data: null,
  strapiErrors: null,
  message: null,
};

interface ProfileFormProps {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  bio: string;
  credits: number;
}

function CountBox({ text }: { readonly text: number }) {
  const style = "font-bold text-md mx-1";
  const color = text > 0 ? "text-primary" : "text-red-500";
  return (
    <div className="flex items-center justify-center h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none">
      You have<span className={cn(style, color)}>{text}</span>credit(s)
    </div>
  );
}

export function ProfileForm({
  data,
  className,
}: {
  readonly data: ProfileFormProps;
  readonly className?: string;
}) {
  console.log({ data });
  if (!data) return null;
  const updateUserWithId = updateProfileAction.bind(null, data.id);

  const [formState, formAction] = useFormState(updateUserWithId, INITIAL_STATE);

  return (
    <div
      className="border p-5 border-slate-800 rounded-md w-full"
      style={
        {
          "-webkit-backdrop-filter": "blur(2px)",
        } as React.CSSProperties
      }
    >
      <h2 className="text-xl pb-2 font-bold">Profile</h2>
      <form action={formAction} className={cn("space-y-4 w-full", className)}>
        <div className="space-y-4 grid ">
          <Avatar
            style={{
              color: "black",
              width: "70px",
              height: "70px",
              // border: "1px solid #333",
              backgroundColor: "white",
            }}
          >
            <AvatarFallback
              style={{
                color: "black",
                width: "70px",
                height: "70px",
                // border: "1px solid #333",
                fontSize: "1.5rem",
                backgroundColor: "white",
              }}
            >
              {data.username.substr(0, 2) || ""}
            </AvatarFallback>
          </Avatar>{" "}
          <div className="text-sm font-semibold text-slate-400">Username</div>
          <Input
            id="username"
            name="username"
            placeholder="Username"
            defaultValue={data.username || ""}
            disabled
          />
          <input type="hidden" name="id" value={data.id} />
          <div className="text-sm font-semibold text-slate-400">Email</div>
          <Input
            id="email"
            name="email"
            placeholder="Email"
            defaultValue={data.email || ""}
            disabled
          />
          {/* <CountBox text={data.credits} /> */}
          {/* </div> */}
          {/* <div className="grid grid-cols-2 gap-4"> */}
          <div className="text-sm font-semibold text-slate-400">Firstname</div>
          <Input
            id="firstName"
            name="firstName"
            placeholder="First Name"
            defaultValue={data.firstName || ""}
          />
          <div className="text-sm font-semibold text-slate-400">Lastname</div>
          <Input
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            defaultValue={data.lastName || ""}
          />
          {/* </div> */}
          <div className="text-sm font-semibold text-slate-400">Bio</div>
          <Textarea
            id="bio"
            name="bio"
            placeholder="Write your bio here..."
            className="resize-none border rounded-md w-full h-[224px] p-2"
            defaultValue={data.bio || ""}
            required
          />
        </div>
        <div className="flex justify-end">
          <SubmitButton text="Update Profile" loadingText="Saving Profile" />
        </div>
        <StrapiErrors error={formState?.strapiErrors} />
      </form>
    </div>
  );
}
