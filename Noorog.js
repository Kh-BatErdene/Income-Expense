// "use client";

// import { useAll } from "../app/layout";

// export default function Modal() {
//   const { modal2, setModal2 } = useAll();

//   return (
//     <dialog className="modal mt-[50%] rounded-2xl z-40 ">
//       <div className="w-[800px] h-[542px] bg-white  border-2 rounded-2xl p-5 m-auto relative ">
//         <div className="border-b-2 mb-6 ">
//           <form>
//             <button
//               // onClick={() => setModal(!modal)}
//               className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//             >
//               ✕
//             </button>
//           </form>
//           <label
//             onClick={() => document.getElementById("AddCatagory").showModal()}
//             className="form-control w-full max-w-xs  "
//           >
//             <select className="outline-none bg-[#F3F4F6] w-full h-12 text-[#A3A3A3] px-4 py-2 rounded-md border-solid border-2 border-[#D1D5DB] mb-4 ">
//               <option className="font-semibold" selected>
//                 Name
//               </option>
//               <option className="font-semibold">Home...</option>
//             </select>
//           </label>
//         </div>
//         <div className="flex justify-between">
//           <div className="max-w-[348px] w-full h-10 relative bg-[#F3F4F6]  rounded-3xl">
//             <div className="flex justify-between">
//               <input type="date" className="border-2 w-[168px] h-[68px] px-3" />
//               <input type="date" className="border-2 w-[168px] h-[68px] px-3" />
//             </div>
//             <button
//               className="absolute right-0 px-5 py-2 text-white  bg-[#F3F4F6] rounded-3xl w-full h-10 mt-8 mb-6 "
//               style={{
//                 background: change1 ? "#16A34A" : "#0166FF",
//               }}
//             >
//               Add Record
//             </button>
//           </div>

//           <label className="form-control w-full max-w-xs  ">
//             <select className="outline-none bg-[#F3F4F6] w-full h-12 text-[#A3A3A3] px-4 py-2 rounded-md border-solid border-2 border-[#D1D5DB] mb-4 ">
//               <option className="font-semibold" selected>
//                 Name
//               </option>
//               <option className="font-semibold">Home...</option>
//             </select>
//           </label>
//         </div>
//       </div>
//     </dialog>
//   );
// }

// import { useAll } from "@/app/layout";
// import { useContext, useState } from "react";
// import { IoMdHome } from "react-icons/io";
// import { MdHomeFilled } from "react-icons/md";
// import { TiHome } from "react-icons/ti";
// import { RiContactsBook2Fill } from "react-icons/ri";
// import { MdContactMail } from "react-icons/md";
// import { PiLadderFill } from "react-icons/pi";
// import { PiIntersectSquareFill } from "react-icons/pi";
// import { FaImage } from "react-icons/fa6";
// import { FaMagnifyingGlassPlus } from "react-icons/fa6";
// import { FaMicrophone } from "react-icons/fa6";
// import { SiMicrosoftexcel } from "react-icons/si";
// import { PiNotepadFill } from "react-icons/pi";
// import { ImMenu } from "react-icons/im";
// import { PiLeafFill } from "react-icons/pi";
// import { PiNumberFiveFill } from "react-icons/pi";
// import { PiNumberCircleSevenFill } from "react-icons/pi";
// import { PiRoadHorizonFill } from "react-icons/pi";
// import { GiSandsOfTime } from "react-icons/gi";
// import { PiAnchorSimpleBold } from "react-icons/pi";
// import { PiTriangleFill } from "react-icons/pi";
// import { PiIntersectBold } from "react-icons/pi";
// import { BiLogoFlickrSquare } from "react-icons/bi";
// import { FaBaseballBall } from "react-icons/fa";
// import { AiFillQuestionCircle } from "react-icons/ai";
// import { TbSquareRoundedLetterA } from "react-icons/tb";
// import { BsWatch } from "react-icons/bs";
// import { PiGlobeSimpleFill } from "react-icons/pi";
// import { TbLemon } from "react-icons/tb";
// import { FaPeace } from "react-icons/fa";
// import { PiToiletPaperFill } from "react-icons/pi";
// import { FaPencilAlt } from "react-icons/fa";

// const colorData = [
//   "#FF7B01",
//   "#AE01FF",
//   "#FF0101",
//   "#01B3FF",
//   "#41CC00",
//   "#0166FF",
//   "#F9D100",
// ];
// export default function AddCatagory() {
//   const { categoryAdd, setCategoryAdd, colorgg, setColor } = useAll();

//   const style = { color: colorgg, size: 84 };
//   const data = [
//     <TiHome {...{ style }} />,
//     <MdHomeFilled {...{ style }} />,
//     <RiContactsBook2Fill {...{ style }} />,
//     <MdContactMail {...{ style }} />,
//     <PiLadderFill {...{ style }} />,
//     <PiIntersectSquareFill {...{ style }} />,
//     <FaImage {...{ style }} />,
//     <FaMagnifyingGlassPlus {...{ style }} />,
//     <FaMicrophone {...{ style }} />,
//     <SiMicrosoftexcel {...{ style }} />,
//     <PiNotepadFill {...{ style }} />,
//     <ImMenu {...{ style }} />,
//     <PiLeafFill {...{ style }} />,
//     <PiNumberFiveFill {...{ style }} />,
//     <PiNumberCircleSevenFill {...{ style }} />,
//     <PiRoadHorizonFill {...{ style }} />,
//     <GiSandsOfTime {...{ style }} />,
//     <PiAnchorSimpleBold {...{ style }} />,
//     <PiTriangleFill {...{ style }} />,
//     <PiIntersectBold {...{ style }} />,
//     <BiLogoFlickrSquare {...{ style }} />,
//     <FaBaseballBall {...{ style }} />,
//     <AiFillQuestionCircle {...{ style }} />,
//     <TbSquareRoundedLetterA {...{ style }} />,
//     <BsWatch {...{ style }} />,
//     <PiGlobeSimpleFill {...{ style }} />,
//     <TbLemon {...{ style }} />,
//     <FaPeace {...{ style }} />,
//     <PiToiletPaperFill {...{ style }} />,
//     <FaPencilAlt {...{ style }} />,
//   ];
//   return (
//     <dialog id="AddCatagory" className="modal w-full">
//       <div className="modal-box w-full h-[336px]">
//         <form method="dialog w-full h-full">
//           <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
//             ✕
//           </button>{" "}
//         </form>
//         <div className="w-[312px] h-[336px] bg-white flex flex-col p-[24px] absolute top-[48px] left-[0px] border-[2px] rounded-lg border-black">
//           <div className="grid grid-row-5 grid-cols-6 h-[264px] w-full">
//             {data.map((icon, index) => (
//               <div
//                 key={index}
//                 className="w-[24px] h-[24px] cursor-pointer"
//                 onClick={() => {
//                   setCategoryAdd(index);
//                 }}
//               >
//                 {icon}
//               </div>
//             ))}
//           </div>
//           <hr></hr>
//           <div className="flex flex-row w-full h-[72px] items-center justify-between">
//             {colorData.map((color, index) => (
//               <span
//                 className="w-[24px] h-[24px] rounded-[12px]"
//                 style={{ backgroundColor: color }}
//                 key={index}
//                 onClick={() => {
//                   setColor(color);
//                 }}
//               ></span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </dialog>
//   );
// }
