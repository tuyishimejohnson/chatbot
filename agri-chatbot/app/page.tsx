import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href={"/signin"}>Sign In</Link>
      <Link href={"/signup"}>Sign UP</Link>
      {/* <div className="border w-5/6 m-auto h-screen items-center">
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
      </div> */}

      <div className="bg-blue-200 py-4 border-black">
        <div className="w-1/3 m-auto">
        <div className="flex flex-col gap-4">
          <input type="text" placeholder="Your Email" className="py-2"/>
          <input type="password" placeholder="Your Password" className="py-2" />
        </div>

        <div className="flex mt-3 justify-center bg-gray-100 py-1 rounded-md">
          <button type="submit" className="">Sign UP</button>
        </div>
        </div>
        
      </div>
    </>
  );
}
