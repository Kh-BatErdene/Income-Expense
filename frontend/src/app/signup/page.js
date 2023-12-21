import { useRouter } from "next/navigation";
import { useAuth } from "../layout";

export default function Home() {
  const { setIsLoggedIn } = useAuth();
  const router = useRouter();
  return (
    <div className="w-full m-auto h-[1024px]">
      <div className="h-screen flex items-center ">
        <div className="flex justify-center items-center w-1/2 h-[1024px] ">
          <div className="w-[384px]">
            <img className="m-auto mb-10" src="/logo.svg" />
            <h2 className="text-slate-900 font-semibold text-[24px] text-center ">
              Create Geld account
            </h2>
            <p className="text-center mb-10 mt-2">
              Sign up below to create your Wallet account
            </p>
            <input
              className="w-full h-12 text-[#D1D5DB] bg-[#F3F4F6] pl-4 py-3 rounded-md border-solid border-2 border-[#D1D5DB] mb-4"
              type="text"
              placeholder="Name"
            />
            <input
              className="w-full h-12 text-[#D1D5DB] bg-[#F3F4F6] pl-4 py-3 rounded-md border-solid border-2 border-[#D1D5DB] mb-4"
              type="text"
              placeholder="Email"
            />

            <input
              className="w-full h-12 text-[#D1D5DB] bg-[#F3F4F6] pl-4 py-3 rounded-md border-solid border-2 border-[#D1D5DB] mb-4"
              type="password"
              placeholder="Password"
            />
            <input
              className="w-full h-12 text-[#D1D5DB] bg-[#F3F4F6] pl-4 py-3 rounded-md border-solid border-2 border-[#D1D5DB]"
              type="password"
              placeholder="Re-Password"
            />
            <div className="flex justify-center ">
              <button
                onClick={() => {
                  setIsLoggedIn(true);
                  router.push("/step1");
                }}
                className="rounded-3xl w-full max-w-[384px] text-white mt-4  mb-11 h-[48px] bg-[#0166FF]"
              >
                Sign up
              </button>
            </div>
            <div className="flex gap-3 justify-center">
              <a>Already have account?</a>
              <a href="/" className="text-[#0166FF]">
                Log in
              </a>
            </div>
          </div>
        </div>
        <div className="bg-[#0166FF] h-full w-1/2 "></div>
      </div>
    </div>
  );
}
