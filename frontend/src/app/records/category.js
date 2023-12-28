"use client";
export default function Category(props) {
  return (
    <div className="w-250px h-8  flex items-center justify-between my-2 cursor-pointer">
      <div className="flex gap-3">
        <img src="eye.svg" />
        <p className="text-base">{props.title}</p>
      </div>

      <img src="more.svg" />
    </div>
  );
}
