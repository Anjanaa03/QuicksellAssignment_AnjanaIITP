// src/components/KanbanColumn.js
import React from 'react';
import TicketCard from './TicketCard';
import './KanbanBoardColumn.css';

const KanbanColumn = ({ groupName, tickets }) => {
  return (
    <div className="kanban-column">
    <div className='kanban-column-header'>
    <div className="kanban-column-title">
      <h3>{groupName}</h3>
      <span className='task-count'>{tickets.length}</span>
      
      </div>

      <button className="add-button">+</button>
      <span className="horizontal"></span>
</div>
<div className='kanban-tasks'>
      {tickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
    </div>
    
  );
};

export default KanbanColumn;


