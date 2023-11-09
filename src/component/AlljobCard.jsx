import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AlljobCard = ({ coffee }) => {
    const {_id,photo,title,name,category,salary,description,posting,deadline,numbers}=coffee;
//   const {_id,title, name, salary, posting, deadline } = coffee;
 

  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      {/* <tr>
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
         
      </tr> */}
    </thead>
    <tbody>
      {/* row 1 */}

      {/* row 4 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
         
            <div>
              <div className="font-bold">{name}</div>
              
            </div>
          </div>
        </td>
        <td>
         {title}
        </td>
        <td>{posting}</td>
        <td>{deadline}</td>
        <td>{salary}</td>
        <th>
            <Link to={`/alljob/details/${_id}`}>
            <button className="btn btn-warning">details</button>
            </Link>
         
        </th>
      </tr>
    </tbody>
    {/* foot */}
    
    
  </table>
</div>
  
  );
};

export default AlljobCard;
