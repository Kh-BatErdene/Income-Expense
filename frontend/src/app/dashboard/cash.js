import { useAll } from "@/components/providers/AuthProvider";

export default function Cash() {
  const { recordData } = useAll();
  return (
    <span className="w-[384px] h-[216px] p-[32px] flex flex-col rounded-[18px] justify-between bg-[#0166FF] relative overflow-hidden">
      <img src="/whitelogo.svg" className="w-[80px] h-[30px] z-10"></img>
      <img src="/blur.svg" className="absolute top-0 left-0"></img>
      <img src="/shape.svg" className="absolute right-0 bottom-0"></img>
      <div className="w-full h-fit flex flex-row justify-between items-center">
        <div className="w-full h-fit flex flex-col text-white z-10">
          <p>Үлдэгдэл</p>
          <p>
            {Math.abs(
              recordData
                .filter((record) => record.isExpense === false)
                .reduce((niit, orlogo) => niit + Number(orlogo.amount), 0) -
                recordData
                  .filter((record) => record.isExpense === true)
                  .reduce((niit, zarlaga) => niit + Number(zarlaga.amount), 0)
            )}
            ₮
          </p>
        </div>
        <img src="/Union.svg" className="w-[12px] h-20px z-10"></img>
      </div>
    </span>
  );
}
