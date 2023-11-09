import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import MyJobCard from "./MyJobCard";

import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";
const MyJob = () => {
    const {user}=useContext(AuthContext);
const [bookings,setBookings]=useState([]);

    const url=`https://job-hub-server-gamma.vercel.app/addjob?email=${user?.email}`;

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setBookings(data))
    },[])




const handleDelete = (id) => {
  Swal.fire({
    title: 'Are you sure you want to delete?',
    text: 'You won\'t be able to revert this!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes, delete it!',
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`https://job-hub-server-gamma.vercel.app/addjob/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            console.log('deleted');
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          // Handle error, show a message or perform other actions if the delete request fails
        });
    }
  });
};

    


    return (
        <div >
            <h2 className="text-5xl">my job: {bookings.length}</h2>
            <div className="overflow-x-auto ">
 <table className="table">
    {/* head */}
    <thead>
      <tr>
        {/* <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th> */}
        <th>photo</th>
        <th>Name</th>
        <th>title</th>
        <th>category</th>
        <th>salary</th>
        <th>posting</th>
        <th>deadline</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        bookings.map(booking => <MyJobCard
        key={booking._id}
        booking={booking}
        handleDelete={handleDelete}
        >
        </MyJobCard>)
      }
     
     
    
  
    </tbody>
   
    
 </table>
</div>
        </div>
    );
};

export default MyJob;