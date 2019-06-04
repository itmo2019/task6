import React from 'react';

import './find.css';

interface IProps {
  filterText: string;
  onFilterChange: (value: string) => void;
}
function  Find (props: IProps) {
  console.log('Search');
  const { filterText,  onFilterChange} = props;
  
  return (
      <input
	       		className="body__find" 
	       		name="request" 
	       		value={filterText}
	       		type="search"
	       		placeholder="Поиск"
	       		onChange={e => onFilterChange(e.target.value)}
       		/>
  );
}; 


export default Find;