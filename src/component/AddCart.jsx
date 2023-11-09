import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const AddCart = () => {
    const loadedUsers=useLoaderData();

    const [users,setUsers]=useState(loadedUsers);

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCoffees, setFilteredCoffees] = useState([]);

    const handleSearch = () => {
      const filteredData = loadedUsers.filter(coffee => {
        const category = coffee && coffee.category;
        return category && category.includes(searchTerm);
      });
      setFilteredCoffees(filteredData);
    };

    const handleDelete = id=>{
        console.log('Delete button clicked for ID:', id);
        fetch(` https://job-hub-server-gamma.vercel.app/cart/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                console.log('deleted successfully');
                //remove from ui
                const remainingUsers=users.filter(user=>user._id!==id);
                setUsers(remainingUsers);
            }
        })
    }
 
    return (
        <div>
        <h2>Applied Job:{loadedUsers.length}</h2>
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
{/* head */}
<thead>
 <tr>
   
    <th>Name</th>
    <th>title</th>
    <th>salary</th>
    <th>category</th>
    <th>posting</th>
    <th>deadline</th>
    <th>numbers</th>
    <th>Action</th>
 </tr>
</thead>
<tbody>
 {/* row 1 */}

    
 {
    filteredCoffees.length > 0 ? filteredCoffees.map(user=><tr key={user._id}>
      
        <td>{user.name}</td>
        <td>{user.title}</td>
        <td>{user.salary}</td>
        <td>{user.category}</td>
        <td>{user.posting}</td>
        <td>{user.deadline}</td>
        <td>{user.numbers}</td>
        <td>
            <button onClick={()=>handleDelete(user._id)} className="btn btn-neutral">Delete</button>
            </td> 
       
    </tr>
        )
: users.map(user=><tr key={user._id}>
      
        <td>{user.name}</td>
        <td>{user.title}</td>
        <td>{user.salary}</td>
        <td>{user.category}</td>
        <td>{user.posting}</td>
        <td>{user.deadline}</td>
        <td>{user.numbers}</td>
        <td>
            <button onClick={()=>handleDelete(user._id)} className="btn btn-neutral">Delete</button>
            </td> 
       
    </tr>
        )
}




</tbody>
</table>
</div>

    </div>
    );
};

export default AddCart;