//Parsing
import { useAll } from "../app/layout";

export default function Dropdown() {
  const { drop, setDrop } = useAll();
  const handleClick = () => {
    setDrop(!drop);
  };
  return (
    <div className=" w-full mb-2">
      <div
        onClick={handleClick}
        className="cursor-pointer flex  items-center justify-center w-full form-control outline-none bg-[#F3F4F6] h-12 text-[#94A3B8]  rounded-md border-solid border-2 border-[#D1D5DB] mb-1 mt-2 pr-5 pl-3"
      >
        <div className="flex justify-between w-full">
          <p>Find or choose category</p>
          <img src="/dropdown.svg" />
        </div>
      </div>
      <GG />
    </div>
  );
}

export function GG() {
  const { drop, setDrop } = useAll();
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
        <div className="flex mb-1 w-full pt-2 items-center gap-4 hover:bg-gray-50  ">
          <img className="translate-x-0.5 " src="/Vector.svg"></img>
          <span>Home</span>
        </div>
        <div className="flex mb-1 w-full pt-2 items-center gap-4 hover:bg-gray-50 ">
          <img src="/Gift.svg"></img>
          <span>Gift</span>
        </div>
        <div className="flex mb-1 w-full pt-2 items-center gap-4 hover:bg-gray-50 ">
          <img src="/ForkKnife.svg"></img>

          <span>Food</span>
        </div>
        <div className="flex mb-1 w-full pt-2 items-center gap-4 hover:bg-gray-50 ">
          <img src="/Wine.svg"></img>
          <span>Drink</span>
        </div>
        <div className="flex mb-1 w-full pt-2 items-center gap-4 hover:bg-gray-50 ">
          <img src="/Taxi.svg"></img>
          <span>Drink</span>
        </div>
        <div className="flex mb-1 w-full pt-2 items-center gap-4 hover:bg-gray-50 ">
          <img src="TShirt.svg"></img>
          <span>Drink</span>
        </div>
      </li>
    </ul>
  );
}
