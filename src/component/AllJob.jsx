import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AlljobCard from './AlljobCard';

const AllJob = () => {
  const allCoffees = useLoaderData();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCoffees, setFilteredCoffees] = useState([]);

  const handleSearch = () => {
    const filteredData = allCoffees.filter(coffee => {
      const title = coffee && coffee.title && coffee.title.toLowerCase();
      return title && title.includes(searchTerm.toLowerCase());
    });
    setFilteredCoffees(filteredData);
  };

  return (
    <div>
      <div>
        <input className='h-9'
          type="text"
          placeholder="Search by Job Title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch} className='btn btn-warning'>Search</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job Title</th>
              <th>Job Posting Date</th>
              <th>Application Deadline</th>
              <th>Salary range</th>
              <th>Status</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="">
        {filteredCoffees.length > 0 ? (
          filteredCoffees.map(coffee => (
            <AlljobCard key={coffee._id} coffee={coffee} />
          ))
        ) : (
          allCoffees.map(coffee => (
            <AlljobCard key={coffee._id} coffee={coffee} />
          ))
        )}
      </div>
    </div>
  );
};

export default AllJob;
