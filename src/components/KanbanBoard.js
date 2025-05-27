import React, { useState } from 'react';
import { Droppable, Draggable, DragDropContext} from 'react-beautiful-dnd';

const initialData = {
  todo: [
    { id: "1", content: "Create wireframe" },
    { id: "2", content: "Set up project" },
  ],
  inProgress: [
    { id: "3", content: "Build header" },
  ],
  done: [
    { id: "4", content: "Install dependencies" },
  ],
};

const KanbanBoard = () => {
  const [columns, setColumns] = useState(initialData);

  const onDragEnd = (result) => {
    const {source, destination} = result;
    if(!destination) return;
    
    // const sourceCol = columns[source.droppableId];
    // const destCol = columns[destination.droppableId];
    const sourceCol = Array.from(columns[source.droppableId]);
    const destCol = Array.from(columns[destination.droppableId]);
    const [movedItem] = sourceCol.splice(source.index,1);
    destCol.splice(destination.index,0,movedItem);

    setColumns({
        ...columns,
        [source.droppableId] : sourceCol,
        [destination.droppableId] : destCol,
    });
  };

  const getColumnStyle = {
    margin: "0 10px",
    padding: "10px",
    width: "300px",
    backgroundColor: "#f4f5f7",
    borderRadius: "6px",
  };
  return (
   <DragDropContext onDragEnd={onDragEnd}>
   <h1 style={{textAlign: 'center'}}>Kanban Board</h1>
   <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
    {Object.entries(columns).map(([columnId,tasks]) => (
        <Droppable key={columnId} droppableId={columnId}>
          {(provided) => (
            <div 
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={getColumnStyle}
            >
              <h3 style={{ textTransform: "capitalize" }}>{columnId}</h3>
              {tasks.map((task,index) => (
                <Draggable
                 key={task.id}
                 draggableId={task.id}
                 index={index}
                >
                 {(provided) => (
                  <div
                  ref={provided.innerRef}
                  {...provided.dragHandleProps}
                  {...provided.draggableProps}
                    style={{
                          ...provided.draggableProps.style,
                          padding: "10px",
                          marginBottom: "10px",
                          backgroundColor: "white",
                          borderRadius: "4px",
                          boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                          cursor: "grab",
                        }}
                  >
                    {task.content}
                  </div>
                 )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
    ))}
   </div>
   </DragDropContext>
  );
};

export default KanbanBoard;