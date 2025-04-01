import { useContext } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  rectSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import "react-resizable/css/styles.css";
import ReSizeItems from "./ReSizeItems";
import Header from "./header/Header";
import { ContextProvider } from "./context/ContextApi";

export default function DragAndDrop() {
  const { charts, setCharts } = useContext(ContextProvider);

  const onDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = charts.findIndex((chart) => chart.id === active.id);
      const newIndex = charts.findIndex((chart) => chart.id === over.id);
      setCharts(arrayMove(charts, oldIndex, newIndex));
    }
  };

  const onResize = (id, width, height) => {
    setCharts(
      charts.map((chart) =>
        chart.id === id ? { ...chart, width, height } : chart
      )
    );
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={onDragEnd}
          onClick={(e) => {
            e.stopPropagation();
            console.log("2");
          }}
        >
          <SortableContext
            items={charts.map((chart) => chart.id)}
            strategy={rectSortingStrategy}
            onClick={(e) => {
              e.stopPropagation();
              console.log("2");
            }}
          >
            <div className="inline-flex flex-wrap gap-4  w-full">
              {charts.map((chart) => (
                <ReSizeItems key={chart.id} chart={chart} onResize={onResize} />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}
