///dd
import React, { useEffect, useState } from "react";

const Range = () => {
  const [rangeChange, setRangeChange] = useState(50);
  const [minRange, setMinRange] = useState(0);
  const [maxRange, setMaxRange] = useState(0);

  useEffect(() => {
    setRangeChange(minRange, maxRange);
  }, [rangeChange]);
  return (
    <div>
      <h1 className="font-semibold my-5">Amount Range</h1>
      <div className="flex gap-2 mb-5">
        <div className="flex gap-4">
          <input
            type="number"
            onChange={(e) => setMinRange(e.target.value)}
            value={minRange}
            className="bg-[#F3F4F6] w-[114.5px] h-[48px] p-3 outline-none border-2 rounded-md"
            step="1"
          />
          <input
            onChange={(e) => setMaxRange(e.target.value)}
            value={maxRange}
            className="bg-[#F3F4F6] w-[114.5px] h-[48px] p-3 outline-none border-2 rounded-md"
            type="number"
            step="1"
          />
        </div>
      </div>
      <input
        className="w-full"
        type="range"
        max={maxRange}
        min={minRange}
        value={rangeChange}
        step="10"
      />
      <div className="w-full flex justify-between text-lg px-2">
        <span>{minRange}</span>
        <span>{maxRange}</span>
      </div>
    </div>
  );
};

export default Range;
