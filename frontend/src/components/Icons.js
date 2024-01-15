import * as icons from "./ReactIcons";
import { useAll } from "./providers/AuthProvider";

export default function Icons() {
  const {
    categoryData,
    setInputText,
    setInputIcon,
    ClicktoRecord,
    setDrop,
    setRecordIcon,
    setCateColor,
  } = useAll();
  return (
    <button onClick={ClicktoRecord}>
      {categoryData.map((card, index) => {
        const Icon = icons[card.Icon];
        return (
          <div
            className="flex w-full items-center gap-4  pb-2 cursor-pointer hover:bg-gray-50 mt-2"
            key={index}
            onClick={() => {
              setInputIcon(Icon), setRecordIcon(card.Icon);
              setCateColor(card.color);
              setInputText(card.Category_name), setDrop(false);
            }}
          >
            <div className="flex items-center h-full ml-5">
              <div className="flex items-center gap-3 pt-2">
                {<Icon size="20px" fill={card.color} />}
                <p> {card.Category_name}</p>
              </div>
            </div>
          </div>
        );
      })}
    </button>
  );
}
