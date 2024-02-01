import { MutableRefObject, useState } from "react";
import { v4 } from "uuid";
import { Note } from "../../../modals/Note";

const Edit = ({
  listData,
  addData,
  submittingStatus,
}: {
  listData: Note[];
  addData: (prevData: Note[]) => void;
  submittingStatus: MutableRefObject<boolean>;
}) => {
  const [note, setNote] = useState<Note>({ content: "", date: "", time: "" });

  const updateContent = (e: React.FormEvent<HTMLInputElement>) => {
    setNote({ ...note, content: e.currentTarget.value });
  };

  const updateDate = (e: React.FormEvent<HTMLInputElement>) => {
    setNote({ ...note, date: e.currentTarget.value });
  };

  const updateTime = (e: React.FormEvent<HTMLInputElement>) => {
    setNote({ ...note, time: e.currentTarget.value });
  };

  const addItem = () => {
    if (!isValidatedData(note)) {
      alert("資料未輸入完整");
      return;
    }
    submittingStatus.current = true;
    addData([
      {
        id: v4(),
        ...note,
      },
      ...listData,
    ]);
  };

  const isValidatedData = (data: Note) => {
    if (!data.content || !data.date || !data.time) {
      return false;
    }
    return true;
  };

  return (
    <div>
      <h1 className="text-xl font-bold">備忘錄</h1>
      <p className="text-base">記事：</p>
      <input
        type="text"
        className="w-full h-8 border border-black box-border"
        value={note.content}
        onChange={updateContent}
      />
      <p className="text-base">日期：</p>
      <input
        type="date"
        className="w-full h-8 border border-black box-border"
        onChange={updateDate}
      />
      <p className="text-base">時間：</p>
      <input
        type="time"
        className="w-full h-8 border border-black box-border"
        onChange={updateTime}
      />
      <button
        className="w-full mt-5 p-4 bg-gray-900 hover:bg-gray-800 text-white box-border"
        onClick={addItem}
      >
        新增
      </button>
    </div>
  );
};

export default Edit;
