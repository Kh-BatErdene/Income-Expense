export default function Cards(props) {
  return (
    <div className="flex justify-between items-center px-6 bg-white py-3 border-2 rounded-md mb-3">
      <div className="flex items-center gap-4">
        <input type="checkbox" className="checkbox rounded-sm" />
        <img src={props.img} />
        <div>
          <h2 className="text-base">{props.name}</h2>
          <p className="text-xs text-[#6B7280]">{props.date}</p>
        </div>
      </div>
      <p style={{ color: `${props.color}` }}>{props.cash}</p>
    </div>
  );
}
