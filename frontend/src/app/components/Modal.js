import { useState } from "react";

export default function Modal() {
  const [change1, setChange1] = useState("");
  const [change2, setChange2] = useState("#F3F4F6");

  const handleClick = () => {
    setChange1(!change1);
    setChange2(!change2);
  };

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box w-full h-full max-w-[792px] max-h-[512px] bg-white">
        <div className="border-b-2 mb-6 ">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Add Record</h3>
        </div>
        <div className="flex justify-between">
          <div className="max-w-[348px] w-full h-10 relative bg-[#F3F4F6]  rounded-3xl">
            <button
              onClick={handleClick}
              className="z-10 absolute left-0 px-5 py-2  text-black bg-[#F3F4F6] rounded-3xl w-[172px] h-10 "
              style={{
                background: change2 ? "#0166FF" : false,
                color: change2 ? "white" : "black",
              }}
            >
              Income
            </button>
            <button
              onClick={handleClick}
              className="absolute right-0 px-5 py-2  text-black bg-[#F3F4F6] rounded-3xl w-[172px] h-10"
              style={{
                background: change1 ? "#16A34A" : "#F3F4F6",
                color: change1 ? "white" : "black",
              }}
            >
              Expense
            </button>
            <div className="relative w-full background mt-16">
              <input
                type="text"
                placeholder="₮ 000.00"
                className="input input-bordered rounded-md w-full h-[76px] bg-[#F3F4F6] pt-5"
              />
              <p className="absolute z-20 top-2 left-4 text-5">Amount</p>
            </div>
            <p className="mt-4">Category</p>
            <label className="form-control w-full max-w-xs  mt-2">
              <select className="outline-none bg-[#F3F4F6] w-full h-12 text-[#94A3B8] px-4 py-2 rounded-md border-solid border-2 border-[#D1D5DB] mb-4 ">
                <option className="font-semibold" selected>
                  Find or choose category
                </option>{" "}
              </select>
            </label>
          </div>
          <div className="w-1/2">
            <p>Payee</p>
            <label className="form-control w-full max-w-xs  ">
              <select className="outline-none bg-[#F3F4F6] w-full h-12 text-[#A3A3A3] px-4 py-2 rounded-md border-solid border-2 border-[#D1D5DB] mb-4 ">
                <option className="font-semibold" selected>
                  Write here
                </option>
                <option className="font-semibold">I said Write here</option>
              </select>
            </label>
          </div>
        </div>
      </div>
    </dialog>
  );
}
