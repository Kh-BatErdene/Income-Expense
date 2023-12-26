import { useAll } from "../app/layout";
export default function GG() {
  const { drop, select, handleCategory, data } = useAll();

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
        <button
          id="1"
          onClick={handleCategory}
          className="flex mb-1 w-full pt-2 items-center gap-4 hover:bg-gray-50  "
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="flex mb-1 w-full pt-2 items-center gap-4  "
            >
              <img className="translate-x-0.5" src={item.img}></img>
              <div>{item.title}</div>
            </div>
          ))}
        </button>
        <button className="flex mb-1 w-full pt-2 items-center gap-4 hover:bg-gray-50 ">
          <img src="/Gift.svg"></img>
          <span>Gift</span>
        </button>
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
