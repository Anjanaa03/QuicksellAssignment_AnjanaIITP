// src/components/KanbanBoard.js
import React from 'react';
import KanbanColumn from './KanbanColumn';
import './KanbanBoard.css';

const KanbanBoard = ({ groupedTickets }) => {
  const groupNames = Object.keys(groupedTickets);

  if (groupNames.length === 0) {
    return <div className="kanban-board empty">No data to display. Please select grouping and sorting options.</div>;
  }

  return (
    <div className="kanban-board">
      {groupNames.map((group) => (
        <KanbanColumn key={group} groupName={group} tickets={groupedTickets[group]} />
      ))}
    </div>
  );
};

export default KanbanBoard;
