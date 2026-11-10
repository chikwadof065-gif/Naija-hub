import Link from "next/link";
import { signIn } from "@/auth";
import { Theme } from "@/components/Theme";
import { FaArrowLeft, FaCheck } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

type AuthPageProps = {
  mode: "signin" | "signup";
};

const benefits = [
  "Learn from experienced business owners",
  "Explore practical startup costs and plans",
  "Make your next move with confidence",
];

export default function AuthPage({ mode }: AuthPageProps) {
  const isSignUp = mode === "signup";

  return (
    <main className="relative flex min-h-[calc(100dvh-64px)] items-center justify-center overflow-hidden bg-[url('/bg.jpg')] bg-cover bg-center px-4 py-10 md:px-8">
      <div className="absolute inset-0 bg-neutral-950/75" />

      <section className="relative z-10 grid w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/95 shadow-2xl shadow-black/40 backdrop-blur md:grid-cols-2">
        <div className="relative flex flex-col justify-between overflow-hidden bg-[#2F3E2C] p-8 md:p-10">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[35px] border-white/5" />
          <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full border-[45px] border-white/5" />

          <div className="relative">
            <Link
              href="/"
              className="mb-12 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              <FaArrowLeft aria-hidden="true" />
              Back to home
            </Link>

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#D1EDD3]">
              Naija Venture Hub
            </p>
            <h2 className="max-w-sm text-3xl font-extrabold leading-tight text-white md:text-4xl">
              Build your next big idea with{" "}
              <span style={{ color: Theme.secondary }}>real-world insight.</span>
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
              Connect with people who have built businesses here and learn what it
              really takes to get started.
            </p>
          </div>

          <ul className="relative mt-10 space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3 text-sm text-white/85">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#D1EDD3]">
                  <FaCheck className="text-[10px]" aria-hidden="true" />
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-center p-8 md:p-12">
          <div className="mb-8">
            <p className="mb-3 text-sm font-semibold" style={{ color: Theme.secondary }}>
              {isSignUp ? "Your journey starts here" : "Good to have you back"}
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight text-white">
              {isSignUp ? "Create your account" : "Welcome back"}
            </h1>
            <p className="mt-3 text-sm leading-6 text-neutral-400">
              {isSignUp
                ? "Sign up with Google to join the community and start exploring."
                : "Sign in to pick up where you left off and keep exploring."}
            </p>
          </div>

          <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-white px-5 py-4 font-semibold text-neutral-900 shadow-lg shadow-black/10 transition hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D1EDD3]"
            >
              <FcGoogle className="text-2xl" aria-hidden="true" />
              <span>Continue with Google</span>
            </button>
          </form>

          <div className="my-7 flex items-center gap-4 text-xs text-neutral-600">
            <span className="h-px flex-1 bg-neutral-800" />
            <span>FAST, SECURE ACCESS</span>
            <span className="h-px flex-1 bg-neutral-800" />
          </div>

          <p className="text-center text-xs leading-5 text-neutral-500">
            By continuing, you agree to use your Google account to access Naija
            Venture Hub.
          </p>

          <p className="mt-8 text-center text-sm text-neutral-400">
            {isSignUp ? "Already have an account?" : "New to Naija Venture Hub?"}{" "}
            <Link
              href={isSignUp ? "/signin" : "/signup"}
              className="font-bold transition-colors hover:underline"
              style={{ color: Theme.secondary }}
            >
              {isSignUp ? "Sign in" : "Create an account"}
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
