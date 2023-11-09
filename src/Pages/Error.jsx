import { Link } from "react-router-dom";
import img from '../assets/error.jpg'

const Error = () => {
    return (
        <div className="not-found-page">
      <img
        src={img}
        alt="404 Not Found"
        className="not-found-image"
      />
      <button className="btn btn-warning">
       <Link to='/'>Back to Home please!</Link> 
      </button>
    </div>
    );
};

export default Error;