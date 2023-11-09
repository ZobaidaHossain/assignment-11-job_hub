import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import Swal from "sweetalert2";
// import 'sweetalert2/dist/sweetalert2.min.css';
import "react-toastify/dist/ReactToastify.css";

import { usePDF } from 'react-to-pdf';


const ApplyModel = () => {

  const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
  

    const{user}=useContext(AuthContext);
    const [userName, setUserName] = useState('');
    const [Name, setName] = useState('');
 
    useEffect(() => {
        if (user) {
          // Set the user's name or email as the default value
          setUserName(user.email);
          setName(user.displayName || '');
        }
      }, [user]);

      
      const handleNameChange = (e) => {
        setName(e.target.value);
    };
    
    //
   
    //
    const handleSubmit=e=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const link=form.link.value;
        const newCoffee={name,email,link};
        console.log(newCoffee);
       

            //send add a job data to the server from client side
            fetch('https://job-hub-server-gamma.vercel.app/user',{
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
                        text: 'User added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                      
                }
            })
    }

    

  
   

    return (
     <div>
      <button className="btn btn-warning"onClick={() => toPDF()}>Download PDF</button>
         <div ref={targetRef}>
<div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit}className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                defaultValue={Name}
                                onChange={handleNameChange}
                                className="input input-bordered"
                                required
                            />
                {/* <input type="text" placeholder="name" name="name"className="input input-bordered" required /> */}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email"  defaultValue={userName}  className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Resume Link</span>
                </label>
                <input type="text" placeholder="Resume Link" name="link" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
              <button className="btn btn-warning" >Submit</button>
            
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
      </div>
    );
};

export default ApplyModel;