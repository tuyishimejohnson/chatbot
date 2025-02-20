import { Sign } from "crypto";
import SignInRoute from "./(auth)/signin/page";
import SignUpRoute from "./(auth)/signup/page";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <SignUpRoute />

      <Link href={<SignInRoute />}>Sign In</Link>
      <Link href={<SignUpRoute />}>Sign UP</Link>
      <div className="border w-5/6 m-auto h-screen items-center">
        <div className="text-4xl flex items-center justify-center">
          <h1>Ask anything about agriculture</h1>
        </div>

        <div>
          <input
            type="text"
            placeholder="Ask anything"
            className="placeholder:text-2xl py-5 border border-3"
          />
        </div>
        <h1>Hello world</h1>
      </div>
    </>
  );
}
