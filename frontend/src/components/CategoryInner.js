import { useAll } from "@/components/providers/AuthProvider";

//
export default function CategoryInner() {
  const { drop, data, setTitle, setImg, setModal2, modal2, setModal } =
    useAll();

  const handleClick = () => {
    setModal(false);
    setModal2(!modal2);
  };

  return (
    <ul
      style={{ display: drop ? "flex" : "none" }}
      className=" menu p-2 shadow  rounded-box w-full bg-white z-30 absolute "
    >
      <li>
        <div
          onClick={handleClick}
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
