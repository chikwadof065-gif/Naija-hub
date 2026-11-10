import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Ideas from "./ideas";

export const dynamic = "force-dynamic";

export default async function IdeasPage() {
  const session = await auth();

  if (!session) {
    redirect("/signin");
  }

  return <Ideas />;
}