
import img from '../assets/banner.png'
const Banner = () => {
    return (
     
        <div className="h-[40rem] relative w-full">
          <img src={img} className="h-[40rem] w-full rounded-xl" />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
         
            <div className='text-white font-bold space-y-7 pl-12 w-1/2'> <h2 className='text-6xl lg:text-5xl'>Your Gateway to Opportunity
            </h2> 
            <p>Explore, apply, and get job opportunities.</p>
            <div className='flex space-x-2'>
            <input
              type="text"
              placeholder="Search for jobs"
              className="bg-white text-black px-4 py-2 rounded-l-md flex-grow"
            />
             <button className="btn btn-warning  ">Search</button>
                </div>   
            </div>
          </div>
        </div> 
    );
};

export default Banner;