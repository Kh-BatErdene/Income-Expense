import { useAll } from "@/components/providers/AuthProvider";

import { useIcon } from "./AddCategory";

const colorData = [
  "#0166FF",
  "#F9D100",
  "#AE01FF",
  "#FF0101",
  "#FF7B01",
  "#01B3FF",
  "#41CC00",
];

export default function ChangeColor() {
  const { setCategoryAdd, setColorgg, modal3, setModal3 } = useAll();

  const { data } = useIcon();

  return (
    <div
      className="w-full absolute top-[97px] left-5"
      style={{ display: modal3 ? "flex" : "none" }}
    >
      <div>
        <form>
          <button className="modal backdrop">✕</button>
        </form>
        <div className="w-[312px] h-[336px] bg-white flex flex-col p-[24px] absolute top-[48px] left-[0px] border-[2px] rounded-lg border-black">
          <div className="grid grid-row-5 grid-cols-6 h-[264px] w-full ml-3">
            {/* Icon-oо сольж буй хэсэг */}
            {data.map((icon, index) => (
              <div
                key={index}
                className=" cursor-pointer"
                onClick={() => {
                  setCategoryAdd(icon);
                  setModal3(false);
                }}
              >
                {icon}
              </div>
            ))}
          </div>
          <hr></hr>
          {/* Өнгөө сольж буй хэсэг  */}
          <div className="flex flex-row w-full h-[72px] items-center justify-between">
            {colorData.map((color, index) => (
              <span
                className="w-[24px] h-[24px] rounded-[12px] cursor-pointer"
                style={{ backgroundColor: color }}
                key={index}
                onClick={() => {
                  setColorgg(color);
                }}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
