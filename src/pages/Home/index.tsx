import { useState, useEffect, useRef } from "react";
import { API_GET_DATA } from "../../global/constants";
import Edit from "./components/Edit";
import List from "./components/List";
import { Note } from "../../modals/Note";

const fetchData = async (setData: (prevData: Note[]) => void) => {
  const res = await fetch(API_GET_DATA);
  const { data } = await res.json();
  setData(data);
};

const fetchSetData = async (data: Note[]) => {
  await fetch(API_GET_DATA, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ data }),
  });
};

const Home = () => {
  const [data, setData] = useState<Note[]>([]);
  const submittingStatus = useRef<boolean>(false);

  useEffect(() => {
    if (!submittingStatus.current) {
      return;
    }
    fetchSetData(data).then(() => {
      submittingStatus.current = false;
    });
  }, [data]);

  //第一次需要把資料載入渲染出來
  useEffect(() => {
    fetchData(setData);
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="m-4 p-4 border border-fuchsia-600 box-border">
        <Edit
          listData={data}
          addData={setData}
          submittingStatus={submittingStatus}
        />
        <List
          listData={data}
          deleteData={setData}
          submittingStatus={submittingStatus}
        />
      </div>
    </div>
  );
};

export default Home;
