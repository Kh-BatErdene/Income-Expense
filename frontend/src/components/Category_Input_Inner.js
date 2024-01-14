import { useAll } from "@/components/providers/AuthProvider";
import Icons from "./Icons";

export default function CategoryInner() {
  const { drop, setModal2, modal2, setModal } = useAll();

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
      </li>
      <hr className="hover:bg-white w-full"></hr>
      <Icons />
    </ul>
  );
}
