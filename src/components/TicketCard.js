// src/components/TicketCard.js
import React from 'react';
import { FaUser } from 'react-icons/fa';
import './TicketCard.css';

const priorityColors = {
  4: '#ff4d4f', // Urgent - Red
  3: '#fa8c16', // High - Orange
  2: '#52c41a', // Medium - Green
  1: '#1890ff', // Low - Blue
};

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
