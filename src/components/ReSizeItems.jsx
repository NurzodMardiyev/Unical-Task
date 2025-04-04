import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import { IoTrash } from "react-icons/io5";
import { useContext } from "react";
import { ContextProvider } from "./context/ContextApi";

function ReSizeItems({ chart, onResize }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: chart.id });
  const { handleFilterEl } = useContext(ContextProvider);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes}>
      <ResizableBox
        width={chart.width}
        height={chart.height}
        onResize={(e, { size }) => onResize(chart.id, size.width, size.height)}
        resizeHandles={["se"]} // Faqat o'ng pastki burchakda resize
        lockAspectRatio={false} // Eni va bo'yi mustaqil o'zgarsin
        className="bg-white shadow-md p-2 rounded-md"
        onClick={(e) => {
          console.log("yesyes");
          e.stopPropagation();
        }}
      >
        <div
          onClick={(e) => {
            console.log("yes");
            e.stopPropagation();
          }}
        >
          <div className="w-full flex relative">
            <div
              {...listeners}
              className="flex w-full justify-center items-center cursor-grab"
            >
              <span className="flex text-center  px-10 py-1 border">
                {chart.name}
              </span>
            </div>
            <div className="absolute right-2 cursor-pointer top-1">
              <IoTrash
                className="text-[24px]"
                onClick={() => handleFilterEl(chart.id)}
              />
            </div>
          </div>
          {chart.component}
        </div>
        {/* Faqat chartni drag qilish uchun */}
      </ResizableBox>
    </div>
  );
}

export default ReSizeItems;
