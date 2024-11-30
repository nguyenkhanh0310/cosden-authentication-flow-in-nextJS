"use client";
import { useFormStatus } from "react-dom";
import React, { useActionState } from "react";
import { login } from "@/app/login/actions";
import "./LoginForm.module.css";

export function LoginForm() {
  const [state, loginAction] = useActionState(login, undefined);

  return (
    <form action={loginAction} className="flex max-w-[300px] flex-col gap-2 form-input">
      <div className="flex flex-col gap-2">
        <input id="email" name="email" placeholder="Email" />
      </div>
      {state?.errors?.email && (
        <p className="text-red-500">{state.errors.email}</p>
      )}

      <div className="flex flex-col gap-2">
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
        />
      </div>
      {state?.errors?.password && (
        <p className="text-red-500">{state.errors.password}</p>
      )}
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} type="submit">
      Login
    </button>
  );
}
