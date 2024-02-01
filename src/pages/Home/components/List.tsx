import Item from "./Item";
import { Note } from "../../../modals/Note";
import { MutableRefObject } from "react";

const List = ({
  listData,
  deleteData,
  submittingStatus,
}: {
  listData: Note[];
  deleteData: (prevData: Note[]) => void;
  submittingStatus: MutableRefObject<boolean>;
}) => {
  return (
    <div className="pt-5">
      {listData.map((item: Note) => {
        return (
          <Item
            itemData={item}
            key={item.id}
            deleteData={deleteData}
            listData={listData}
            submittingStatus={submittingStatus}
          />
        );
      })}
    </div>
  );
};

export default List;
