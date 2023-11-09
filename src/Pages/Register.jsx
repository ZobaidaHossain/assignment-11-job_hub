import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";


const Register = () => {

const {createUser}=useContext(AuthContext);
const [registerError,setRegisterError]=useState("");
const [success,setSuccess]=useState('');



    const handlelogin=e=>{
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        const photo=e.target.photo.value;
        console.log(name,email,password,photo);

        
        //reset error & success
        setRegisterError('');
        setSuccess('');

        if(password.length <6){
          setRegisterError('password should be 6 character or longer');
          return;
      }

      else if (!/[A-Z]/.test(password)){
          setRegisterError('your password should have at least one upper case characters.')
          return;
      }
      else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        setRegisterError('Your password should contain at least one special character.');
        return;
      }

        //create user in firebase
        createUser(email,password)
        .then(result=>{
          console.log(result.user);
          setSuccess('user Register successfully');
          //toast
          toast.success("Register successful", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        })
        .catch(error=>{
          console.log(error);
          setRegisterError(error.message);
        })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handlelogin}className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input type="text" name="photo" placeholder="PhotoURL" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-warning">Register Now</button>
        </div>
        <p>Already have an account ? Please <Link className="text-blue-600 font-bold" to="/signin">Login</Link></p>
          
      </form>
      <ToastContainer></ToastContainer>
      {
                    registerError && <p className="text-red-700">{registerError}</p>
                }
                {
                    success && <p className="text-green-600">{success}</p>
                    
                }
    </div>
  </div>
</div>
    );
};

export default Register;