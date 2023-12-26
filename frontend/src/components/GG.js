import { useAll } from "../app/layout";
export default function GG() {
  const { drop, data, setTitle, setImg } = useAll();

  return (
    <ul
      style={{ display: drop ? "flex" : "none" }}
      className=" menu p-2 shadow  rounded-box w-full bg-white z-30 absolute"
    >
      <li>
        <div
          onClick={() => document.getElementById("AddCatagory").showModal()}
          className="flex w-full items-center gap-4  pb-2 cursor-pointer hover:bg-gray-50 mb-2 "
        >
          <img src="/PlusCircle.svg"></img>
          <span>Add Category</span>
        </div>
        <hr className="hover:bg-white "></hr>
        {data.map((item, index) => (
          <div
            className="h-[56px] w-full p-[16px]"
            key={index}
            onClick={() => {
              setImg(item.img);
              setTitle(item.title);
              console.log(setImg);
            }}
          >
            <div className="flex flex-row w-full h-full items-center gap-[12px]">
              <img src={item.img} className="w-[24px] h-[24px]"></img>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </li>
    </ul>
  );
}
