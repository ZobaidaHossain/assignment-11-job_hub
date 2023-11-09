import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import ApplyModel from "./ApplyModel";

const Details = () => {
//  //
//  const [showModal, setShowModal] = useState(false);
 
//  //

     const allCoffees = useLoaderData();
    const deadlineDate = new Date(allCoffees.deadline);
    const currentDate = new Date();
    const{user}=useContext(AuthContext);
    // const disableApplyButton = currentDate > deadlineDate || (allCoffees.name == user.email || allCoffees.name == user.displayName)
    
    const disableApplyButton = currentDate > deadlineDate || (allCoffees.name == user.email)
  

//
const handleAddToCart = () => {
  const dataa = {
    _id: allCoffees._id,
    photo: allCoffees.photo,
    name: allCoffees.name,
    title: allCoffees.title,
    salary: allCoffees.salary,
    category:allCoffees.category,
    posting:allCoffees.posting,
    deadline:allCoffees.deadline,
    numbers:allCoffees.numbers

  };

  fetch('https://job-hub-server-gamma.vercel.app/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataa),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      if (data.insertedId) {
        Swal.fire({
          title: 'Success!',
          text: 'cart added successfully',
          icon: 'success',
          confirmButtonText: 'Done',
        });
      }

    })

    .catch((error) => {
      console.error('Error adding product to the cart:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Already added this job',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    });
};

//
// const handleApplyClick = () => {
//   handleAddToCart();
//   setShowModal(true);
// };
//
  return (
      
        <div className="card card-side bg-base-100 shadow-xl">
        <figure><img src={allCoffees.photo}/></figure>
        <div className="card-body">
          <p>job posted email:{allCoffees.email}</p>
          <p>job apply by:{user.email}</p>
          <h2 className="card-title">Job title:{allCoffees.title}</h2>
          <p>description: {allCoffees.description}</p>
          <p>salary range: {allCoffees.salary}</p>
          <p>Number of Application: {allCoffees.numbers}</p>
          <div className="card-actions justify-end">
            <Link to={`/alljob/details/apply`}>
            <button className={`btn btn-primary ${disableApplyButton ? 'disabled' : ''}`} disabled={disableApplyButton}
            onClick={handleAddToCart}
            // onClick={() => {
            //   handleAddToCart();
            //   handleApplyClick();
            // }}
            >apply</button>

            </Link>
            
          </div>
        </div>
        {/* {showModal && (
        <ApplyModel
          closeModal={() => setShowModal(false)}
          allCoffees={allCoffees}
          user={user}
        />
      )} */}
      </div>
    );
};

export default Details;