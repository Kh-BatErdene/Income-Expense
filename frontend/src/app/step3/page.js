export default function Balance() {
  return (
    <div className="p-10 w-[100%]">
      <div className=" w-[260px] m-auto   ">
        <img className="m-auto mb-10 w-[107px] h-[40px]" src="/logo.svg" />
        <div className="flex items-center translate-x-2 text-sm ">
          <div className="border-[4px] w-[240px] border-[#0166FF] h-1 absolute z-1 rounded-md"></div>
          <div className="border-[4px] w-[120px] border-[#0166FF] h-1 absolute z-1 rounded-md"></div>
          <div className="flex justify-center items-center rounded-full w-6 h-6 text-white bg-[#0166FF] z-10">
            1
          </div>
          <div className="border-[4px] w-[92px] h-1  "></div>
          <div className="flex justify-center items-center rounded-full w-6 h-6 text-white bg-[#0166FF]  z-10">
            2
          </div>
          <div className="border-[4px] w-[92px]  h-1"></div>
          <div className="flex justify-center items-center rounded-full w-6 h-6 text-white bg-[#0166FF] z-10">
            3
          </div>
        </div>
      </div>
      <div className="m-auto  w-72  flex justify-between mb-[140px] ">
        <span className="text-[14px]">Currency</span>
        <span className="text-[14px] -translate-x-1">Balance</span>
        <span className="text-[14px]">Finish</span>
      </div>

      <div className="w-[384px] flex flex-col items-center m-auto ">
        <img className="w-12 mb-4" src="/finish.svg" />
        <p2 className="font-bold text-[24px] mb-6">Good Job!</p2>

        <p className="text-[12px] mt-3 ">
          Your very first account has been created. Now continue to dashboard
          and start tracking
        </p>
        <a href="/dashboard" className="w-full">
          <button className="rounded-3xl w-full max-w-[384px] text-white mt-8  mb-11 h-[48px] bg-[#0166FF]">
            Go to Dashboard
          </button>
        </a>
      </div>
    </div>
  );
}
