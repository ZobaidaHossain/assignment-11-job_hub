import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";


const MyJobCard = ({booking,handleDelete}) => {
  const {_id,photo,title,name,category,salary,posting,deadline}=booking




  return (
      <tr>
      {/* <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th> */}
      <td>
        <div className="flex items-center space-x-3">
      
            <div className="rounded w-12 h-12">
              <img src={photo} alt="Avatar Tailwind CSS Component" />
            </div>
         
        </div>
      </td>
      <td>{name}</td>
      <td>
        {title}
       
        
      </td>
      <td>{category}</td>
      <td>{salary}</td>
      <td>{posting}</td>
      <td>{deadline}</td>
      <th>
        <button className="btn btn-warning" onClick={()=>handleDelete(_id)}>delete</button>
      </th>
      <th>
        <Link to={`update/${_id}`}>
        <button className="btn btn-warning">update</button>
        </Link>
      </th>
    </tr>
  );
};

export default MyJobCard;