import { MutableRefObject } from "react";
import { Note } from "../../../modals/Note";

const Item = ({
  listData,
  itemData,
  deleteData,
  submittingStatus,
}: {
  listData: Note[];
  itemData: Note;
  deleteData: (prevData: Note[]) => void;
  submittingStatus: MutableRefObject<boolean>;
}) => {
  const deleteItem = () => {
    submittingStatus.current = true;
    const result = listData.filter((item: Note) => item.id !== itemData.id);
    deleteData(result);
  };

  return (
    <div className="w-full mb-2 pb-2 flex justify-between items-center border-b-2 border-black">
      <div>
        <p className="font-bold text-sky-600">{itemData.content}</p>
        <p>{`${itemData.date}:${itemData.time}`}</p>
        <p className="text-gray-500">ID:{itemData.id}</p>
      </div>
      <button
        className="bg-red-600 hover:bg-red-700 text-white p-2"
        onClick={deleteItem}
      >
        刪除
      </button>
    </div>
  );
};

export default Item;
