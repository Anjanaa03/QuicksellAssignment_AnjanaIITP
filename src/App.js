// src/App.js
import React, { useState, useEffect } from 'react';
import { fetchTickets, fetchUsers } from './services/api';
import Controls from './components/Controls';
import KanbanBoard from './components/KanbanBoard';
import './App.css';


function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [groupedTickets, setGroupedTickets] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch tickets and users from API on component mount
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const [ticketsData, usersData] = await Promise.all([fetchTickets(), fetchUsers()]);
        setTickets(ticketsData);
        setUsers(usersData);
      } catch (err) {
        setError('Failed to fetch data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  // Create a mapping from user ID to username
  const userIdToNameMap = users.reduce((acc, user) => {
    acc[user.id] = user.name;
    return acc;
  }, {});

  // Priority labels mapping
  const priorityLabels = {
    4: 'Urgent',
    3: 'High',
    2: 'Medium',
    1: 'Low',
  };

  // Grouping Functions
  const groupByStatus = (tickets) => {
    return tickets.reduce((groups, ticket) => {
      const status = ticket.status || 'Unknown';
      if (!groups[status]) {
        groups[status] = [];
      }
      groups[status].push(ticket);
      return groups;
    }, {});
  };

  const groupByUser = (tickets) => {
    return tickets.reduce((groups, ticket) => {
      const userId = ticket.userId;
      const username = userIdToNameMap[userId] || 'Unassigned';
      if (!groups[username]) {
        groups[username] = [];
      }
      groups[username].push(ticket);
      return groups;
    }, {});
  };

  const groupByPriority = (tickets) => {
    return tickets.reduce((groups, ticket) => {
      const priority = priorityLabels[ticket.priority] || 'No priority';
      if (!groups[priority]) {
        groups[priority] = [];
      }
      groups[priority].push(ticket);
      return groups;
    }, {});
  };

  // Sorting Functions
  const sortByPriority = (tickets) => {
    // Sort based on numerical priority in descending order
    return [...tickets].sort((a, b) => b.priority - a.priority);
  };

  const sortByTitle = (tickets) => {
    return [...tickets].sort((a, b) => a.title.localeCompare(b.title));
  };

  // Apply Grouping and Sorting
  const applyGroupingAndSorting = () => {
    let grouped = {};

    // Grouping
    switch (groupBy) {
      case 'status':
        grouped = groupByStatus(tickets);
        break;
      case 'user':
        grouped = groupByUser(tickets);
        break;
      case 'priority':
        grouped = groupByPriority(tickets);
        break;
      default:
        grouped = { All: tickets };
    }

    // Sorting within each group
    Object.keys(grouped).forEach((group) => {
      if (sortBy === 'priority') {
        grouped[group] = sortByPriority(grouped[group]);
      } else if (sortBy === 'title') {
        grouped[group] = sortByTitle(grouped[group]);
      }
    });

    setGroupedTickets(grouped);
  };

  // Handle Display Button Click
  const handleDisplay = () => {
    if (!groupBy) {
      alert('Please select a grouping option.');
      return;
    }
    applyGroupingAndSorting();
  };

  return (
    <div className="App">
    
      
      <Controls
        groupBy={groupBy}
        setGroupBy={setGroupBy}
        sortBy={sortBy}
        setSortBy={setSortBy}
        handleDisplay={handleDisplay}
      />
      {loading && <p className="info">Loading data...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && <KanbanBoard groupedTickets={groupedTickets} priorityLabels={priorityLabels} />}
    </div>
  );
}

export default App;





