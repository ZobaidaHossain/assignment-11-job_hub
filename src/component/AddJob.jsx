import Swal from 'sweetalert2'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
const AddJob = () => {
    const [deadline, setDeadline] = useState(new Date());
    const [posting, setposting] = useState(new Date());
    const{user}=useContext(AuthContext);
    const [userName, setUserName] = useState('');
 
    useEffect(() => {
        if (user) {
          // Set the user's name or email as the default value
          setUserName(user.displayName || user.email);
        }
      }, [user]);

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

        const newCoffee={photo,title,name,category,salary,description,posting,deadline,numbers,email}
        console.log(newCoffee);

         //send add a job data to the server from client side
         fetch('https://job-hub-server-gamma.vercel.app/addjob',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'User added successfully.yahoo',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }


    return (
        <div className="bg-yellow-100 p-24">
        <h2 className="text-3xl font-extrabold">Add a Job</h2>
        <form onSubmit={handleJob}>
            {/* form row */}
            <div className="md: flex">
                 {/*image */}
            <div className="form-control md:w-1/2">
<label className="label">
<span className="label-text">Picture URL of the Job Banner</span>
</label>
<label className="input-group">
<input type="text" name="photo" placeholder="Enter product image" className="input input-bordered w-full" />
</label>
</div>
 {/* title */}
<div className="form-control w-1/2 ml-4">
<label className="label">
<span className="label-text">Job Title</span>
</label>
<label className="input-group">
<input type="text" name="title" placeholder="Job Title" className="input input-bordered w-full" />
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
<input type="text" name="name" placeholder="Enter User Name" className="input input-bordered w-full" value={userName} disabled />
</label>
</div>
{/* Job Category */}
<div className="form-control w-1/2 ml-4">
<label className="label">
<span className="label-text">Job Category</span>
</label>
<label className="input-group">
<input type="text" name="category" placeholder=">Job Category" className="input input-bordered w-full" />
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
<input type="text" name="email" defaultValue={user?.email} placeholder="email"  className="input input-bordered w-full" />
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
<input type="text" name="salary" placeholder="Salary range" className="input input-bordered w-full" />
</label>
</div>
{/* Job Description */}
<div className="form-control w-1/2 ml-4">
<label className="label">
<span className="label-text">Job Description</span>
</label>
<label className="input-group">
<input type="text" name="description" placeholder="Write Short description" className="input input-bordered w-full" />
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
<DatePicker
                name="posting"
                selected={posting}
                onChange={(date) => setposting(date)} // Update the deadline state
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
    <DatePicker
                name="deadline"
                selected={deadline}
                onChange={(date) => setDeadline(date)} // Update the deadline state
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
                placeholder="Job Applicants Number"
                className="input input-bordered w-full"
            defaultValue={0}
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

export default AddJob;