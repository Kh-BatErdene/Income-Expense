import { useAll } from "@/components/providers/AuthProvider";

export default function Cash() {
  const { recordData } = useAll();
  return (
    <span className="w-[384px] h-[216px] p-[32px] flex flex-col rounded-[18px] justify-between bg-white">
      <img src="/logo.svg" className="w-[80px] h-[30px]"></img>
      <div className="w-full h-fit flex flex-row justify-between items-center">
        <div className="w-full h-fit flex flex-col">
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
        {/* <img src="/union.svg" className="w-[12px] h-20px"></img> */}
      </div>
    </span>
  );
}
