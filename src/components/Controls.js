// src/components/Controls.js
import React from 'react';
import Select from 'react-select';
import './Controls.css';

const groupingOptions = [
  { value: 'status', label: 'By Status' },
  { value: 'user', label: 'By User' },
  { value: 'priority', label: 'By Priority' },
];

const sortingOptions = [
  { value: 'priority', label: 'Priority (Descending)' },
  { value: 'title', label: 'Title (Ascending)' },
];

const Controls = ({ groupBy, setGroupBy, sortBy, setSortBy, handleDisplay }) => {
  return (
    <div className="controls">
      <div className="control">
{/*         
        <label htmlFor="groupBy">Group By:</label> */}
        <Select
          id="groupBy"
          options={groupingOptions}
          value={groupingOptions.find((option) => option.value === groupBy)}
          onChange={(selected) => setGroupBy(selected ? selected.value : '')}
          placeholder="Select grouping option"
          isClearable
        />
      </div>
      <div className="control">
        {/* <label htmlFor="sortBy">Sort By:</label> */}
        <Select
          id="sortBy"
          options={sortingOptions}
          value={sortingOptions.find((option) => option.value === sortBy)}
          onChange={(selected) => setSortBy(selected ? selected.value : '')}
          placeholder="Select sorting option"
          isClearable
        />
      </div>
      <button onClick={handleDisplay} className="display-button">
        Display
      </button>
    </div>
  );
};

export default Controls;
