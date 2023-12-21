export default function Diagram2(props) {
  return (
    <div className="flex  justify-between  w-full max-w-[337px] mb-3">
      <div className="flex items-center gap-2">
        <div
          className="w-2 h-2  rounded-full"
          style={{ background: `${props.color}` }}
        ></div>
        <span className="w-20">{props.title}</span>
      </div>
      <span>5`000`000₮</span>
      <span>15.50%</span>
    </div>
  );
}
