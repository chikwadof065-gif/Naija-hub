import type { Metadata } from "next";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import AuthPage from "@/components/AuthPage";

export const metadata: Metadata = {
  title: "Sign up | Naija Venture Hub",
  description: "Create an account with Naija Venture Hub.",
};

export default async function SignupPage() {
  const session = await auth();

  if (session) {
    redirect("/post");
  }

  return <AuthPage mode="signup" />;
}
