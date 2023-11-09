
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
const Extra = () => {
    return (
        <div className="section ">
        <div className="container mx-auto py-10 ">
          <h2 className="text-3xl font-bold  mb-5 flex justify-center items-center">Our JobHub Facilities</h2>
         
          <div className="flex flex-wrap gap-[6.5rem]">
            <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
              <div className="review-item">
                <img src={img1} alt="John Doe" className="reviewer-image w-full h-[200px]" />
                <h3 className="text-xl font-semibold">Extensive Job Listings</h3>
                <p>Access a wide array of job opportunities across multiple industries and sectors.</p>
              </div>
            </div>
            <div className="w-1/2 sm:w-1/3 md-w-1/4 lg:w-1/5 xl:w-1/6">
              <div className="review-item">
                <img src={img2} alt="Jane Smith" className="reviewer-image w-full h-[200px]" />
                <h3 className="text-xl font-semibold">Advanced Search Tools</h3>
                <p>Efficiently search, filter, and find the most relevant job listings using our advanced search features.</p>
              </div>
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
              <div className="review-item">
                <img src={img3} alt="Robert Johnson" className="reviewer-image  w-full h-[200px]" />
                <h3 className="text-xl font-semibold">Application Tracking</h3>
                <p>Manage your job applications seamlessly, keeping track of your progress and interactions with employers.</p>
              </div>
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 ">
              <div className="review-item">
                <img src={img4} alt="Emily Davis" className="reviewer-image  w-full h-[200px]" />
                <h3 className="text-xl font-semibold">Professional Resources</h3>
                <p>Access valuable resources, including resume building tips, interview guidance, and career advice.</p>
              </div>
            </div>
           
          </div>
        </div>
      </div>

    );
};

export default Extra;