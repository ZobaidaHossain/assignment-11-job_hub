import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddjobCard = ({ coffee }) => {
    const { _id, name, title, category, salary, posting, deadline, numbers } = coffee;

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleDetailsClick = () => {
        if (!isLoggedIn) {
            toast.error("You have to log in first to view details");
            setTimeout(() => {
                window.location.href = '/signin'; // Redirect to the login page after showing the toast
            }, 1000); // Redirect after 2 seconds (adjust as needed)
        } else {
            window.location.href = `/alljob/details/${_id}`; // Redirect to the details page if logged in
        }
    };

    return (
        <div className="card card-compact w-[23rem] h-[24rem] bg-base-100 shadow-xl m-5">
            <div className="card-body">
                <p className="card-title">Job posted by: {name}</p>
                <p className="card-title">Job title: {title}</p>
                <p className="card-title">Job Posting Date: {posting}</p>
                <p className="card-title">Job Category: {category}</p>
                <p className="card-title">Application Deadline: {deadline}</p>
                <p className="card-title">Job Applicants Number: {numbers}</p>
                <p className="card-title">Salary range: {salary}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-warning" onClick={handleDetailsClick}>
                        Details
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddjobCard;
