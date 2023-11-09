import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = () => {

const {signInUser,signInWithGoogle}=useContext(AuthContext);
const [success,setSuccess]=useState('');
const [loginError, setLoginError] = useState("");


const navigate=useNavigate();

    const handlelogin = e => {
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password);

         

      

        signInUser(email,password)
        .then(result=>{
          console.log(result)
          
          setSuccess('');
           
      
       
          e.target.reset();
          navigate('/');
        })
        .catch(error=>{
          console.error(error);
          setLoginError(error.message);
          toast.error("Invalid email or password", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          if (error.code === "auth/invalid-login-credentials" || error.code === "auth/wrong-password") {
            setLoginError("Invalid email or password");
          } else {
            setLoginError(error.message);
          }
        }
          )

         
    }

     //sign in with google
     const handleGoogleSignIn=()=>{
      signInWithGoogle()
      .then(result=>{
        console.log(result.user)
      
        navigate('/');
      })
      .catch(error=>{
        console.error(error.message)
      })
    }

    return (
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now</h1>
          
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handlelogin}className="card-body">
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
            <div className="form-control mt-6">
              <button className="btn btn-warning">Login Now</button>
            </div>

            <p>New to this website ? Please <Link className="text-blue-600 font-bold" to="/signup">Register</Link></p>
          <p>
          <button onClick={handleGoogleSignIn}className="btn btn-warning ml-10 mt-3">Login with Google</button></p>

          </form>
          <ToastContainer></ToastContainer>
          {
                    loginError && <p className="text-red-700">{loginError}</p>
                }
                {
                    success && <p className="text-green-600">{success}</p>
                    
                }
        </div>
      </div>
    </div>
    );
};

export default Login;