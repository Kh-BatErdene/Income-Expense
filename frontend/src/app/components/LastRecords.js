export default function LastRecords() {
  return (
    <div className="pl-6 pb-6 mt-6 border-b relative ">
      <div className="flex items-center gap-3">
        <img src="home.svg" />
        <div>
          <p className="text-base">Lending & Renting</p>
          <p className="text-xs">3 hours ago</p>
        </div>
      </div>
      <p className="text-[#84CC16] text-base absolute right-1 top-3">
        - 1,000₮
      </p>
    </div>
  );
}
