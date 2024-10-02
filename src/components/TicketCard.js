// src/components/TicketCard.js
import React from 'react';

import './TicketCard.css';

const priorityLabels = {
  4: 'Urgent',
  3: 'High',
  2: 'Medium',
  1: 'Low',
};

const TicketCard = ({ ticket }) => {
  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <span className="ticket-title">{ticket.id}</span>
        <span
          className="ticket-priority"
          //style={{ backgroundColor: priorityColors[ticket.priority] }}
        >
          {priorityLabels[ticket.priority]}
        </span>
      </div>
      <div className="ticket-body">
        <p>
          {ticket.title || 'N/A'}
        </p>
        
        {/* <p>
          <strong>Assigned To:</strong> {ticket.user ? <FaUser /> : 'Unassigned'} {ticket.user || 'N/A'}
        </p> */}
      </div>
      <div className="ticket-tail">  <p>{ticket.tag[0]}</p></div>
    </div>
  );
};

export default TicketCard;
