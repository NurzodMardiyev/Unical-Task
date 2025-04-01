import { useContext, useState } from "react";
import "../../App.css";
import { TreeSelect } from "antd";
import { ContextProvider } from "../context/ContextApi";
const treeData = [
  {
    title: "Rasm qo'shish",
    value: "img",
  },
  {
    title: "Chart qo'shish",
    value: "chart",
    children: [
      {
        title: "Area chart",
        value: "area",
      },
      {
        title: "Line chart",
        value: "line",
      },
      {
        title: "Bar chart",
        value: "bar",
      },
      {
        title: "pie chart",
        value: "pie",
      },
    ],
  },
];
export default function Header() {
  // const [value, setValue] = useState();
  const { isHaveBox, setboxValue, setClickCounts } =
    useContext(ContextProvider);

  const onChange = (newValue) => {
    console.log(newValue);
    setboxValue(newValue);

    setClickCounts((prevCounts) => ({
      ...prevCounts,
      [newValue]: (prevCounts[newValue] || 0) + 1,
    }));
  };
  return (
    <div className="shadow-md w-full">
      <div className="container mx-auto px-3">
        <div className="flex justify-between my-4 items-center pb-4">
          <h1 className="md:text-[24px] font-medium">Unical Task</h1>
          <div className="flex items-center gap-4">
            <TreeSelect
              value="Box qo'shish"
              className="md:w-[200px] w-[150px]"
              dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
              treeData={treeData}
              placeholder="Please select"
              onChange={onChange}
            />
            <div className="flex items-center justify-center gap-2">
              <p className="hidden md:block">Nurod Mardiyev</p>
              <div className="md:w-[50px] w-[30px] md:h-[50px] h-[30px]  rounded-full bg-blue-400 text-white flex items-center justify-center font-medium ">
                NM
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
