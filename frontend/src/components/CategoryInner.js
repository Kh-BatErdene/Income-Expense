import { useAll } from "@/components/providers/AuthProvider";
import { FaHome } from "react-icons/fa";
import * as FaIcons from "react-icons/fa";

export default function CategoryInner() {
  const {
    drop,
    setModal2,
    modal2,
    setModal,
    categoryData,
    isReady2,
    setInputIcon,
    setInputText,
    setDrop,
  } = useAll();

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
        {isReady2 &&
          categoryData.map((card, index) => (
            <div
              className="flex w-full items-center gap-4  pb-2 cursor-pointer hover:bg-gray-50 mb-2  "
              key={index}
              onClick={() => {
                setInputIcon(card.Icon),
                  setInputText(card.Category_name),
                  setDrop(false);
              }}
            >
              <div className="flex flex-row w-full h-full items-center gap-[12px]">
                {card.Icon}
                <p> {card.Category_name}</p>
              </div>
            </div>
          ))}
      </li>
    </ul>
  );
}
