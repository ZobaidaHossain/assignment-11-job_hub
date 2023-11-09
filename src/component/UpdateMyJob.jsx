import { useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Swal from 'sweetalert2'

const UpdateMyJob = () => {
    const coffee=useLoaderData();
    const {_id,photo,title,name,category,salary,posting,deadline,description,email,numbers}=coffee;
  


    const handleJob=event=>{
        event.preventDefault();
        
        const form=event.target;
        const photo=form.photo.value;
        const title=form.title.value;
        const name=form.name.value;
        const category=form.category.value;
        const salary=form.salary.value;
        const description=form.description.value;
        const posting=form.posting.value;
        const deadline=form.deadline.value;
        const numbers=form.numbers.value;
        const email=form.email.value;

        const updateCoffee={photo,title,name,category,salary,description,posting,deadline,numbers,email}
        console.log(updateCoffee);

         //send add a job data to the server from client side
         fetch(`https://job-hub-server-gamma.vercel.app/addjob/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'job updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }


    return (
        <div className="bg-yellow-100 p-24">
        <h2 className="text-3xl font-extrabold">update job:{title}</h2>
        <form onSubmit={handleJob}>
            {/* form row */}
            <div className="md: flex">
                 {/*image */}
            <div className="form-control md:w-1/2">
<label className="label">
<span className="label-text">Picture URL of the Job Banner</span>
</label>
<label className="input-group">
<input type="text" name="photo" defaultValue={photo} placeholder="Enter product image" className="input input-bordered w-full" />
</label>
</div>
 {/* title */}
<div className="form-control w-1/2 ml-4">
<label className="label">
<span className="label-text">Job Title</span>
</label>
<label className="input-group">
<input type="text" name="title" defaultValue={title}placeholder="Job Title" className="input input-bordered w-full" />
</label>
</div>
            </div>
             {/* User name */}
             <div className="md: flex">
            <div className="form-control md:w-1/2">
<label className="label">
<span className="label-text">User Name</span>
</label>
<label className="input-group">
<input type="text" name="name" defaultValue={name} placeholder="Enter User Name" className="input input-bordered w-full" />
</label>
</div>
{/* Job Category */}
<div className="form-control w-1/2 ml-4">
<label className="label">
<span className="label-text">Job Category</span>
</label>
<label className="input-group">
<input type="text" name="category"defaultValue={category} placeholder=">Job Category" className="input input-bordered w-full" />
</label>
</div>
            </div>

                {/* email */}
                <div className="md: flex">
            <div className="form-control md:w-1/2">
<label className="label">
<span className="label-text">email</span>
</label>
<label className="input-group">
<input type="text" name="email" defaultValue={email}placeholder="email"  className="input input-bordered w-full" />
</label>
</div>

            </div>
             {/* Salary range */}
             <div className="md: flex">
            <div className="form-control md:w-1/2">
<label className="label">
<span className="label-text">Salary range</span>
</label>
<label className="input-group">
<input type="text" name="salary" defaultValue={salary} placeholder="Salary range" className="input input-bordered w-full" />
</label>
</div>
{/* Job Description */}
<div className="form-control w-1/2 ml-4">
<label className="label">
<span className="label-text">Job Description</span>
</label>
<label className="input-group">
<input type="text" name="description" defaultValue={description}placeholder="Write Short description" className="input input-bordered w-full" />
</label>
</div>
            </div>
                  {/* Job Posting Date */}
                  <div className="mb-8">
    

<div className="form-control w-full ">
<label className="label">
<span className="label-text">Job Posting Date</span>
</label>
<label className="input-group">
<input type="date"
                name="posting"
                defaultValue={posting}
              
                className="input input-bordered w-full"
              />
{/* <input type="date" name="posting" placeholder="Job Posting Date" className="input input-bordered w-full" /> */}
</label>
</div>
            </div>
              {/* Application Deadline */}
              <div className="mb-8">
    

    <div className="form-control w-full ">
    <label className="label">
    <span className="label-text">Application Deadline</span>
    </label>
    <label className="input-group">
    <input type="date"
                name="deadline"
                defaultValue={deadline}
              
                className="input input-bordered w-full"
              />
    </label>
    </div>
                </div>
                  {/* Job Applicants Number */}
                  <div className="mb-8">
    

<div className="form-control w-full ">
<label className="label">
<span className="label-text">Job Applicants Number</span>
</label>
<label className="input-group">
<input
                type="number"
                name="numbers"
                defaultValue={numbers}
                placeholder="Job Applicants Number"
                className="input input-bordered w-full"
            
              />
{/* <input type="number" name="numbers" placeholder="Job Applicants Number" className="input input-bordered w-full" value="0" disabled /> */}
</label>
</div>
            </div>
<input className="btn btn-block btn-warning" type="submit" value="Add Job" />
                          
        </form>
    </div>
    );
};

export default UpdateMyJob;