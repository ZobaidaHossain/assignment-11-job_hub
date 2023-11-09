import img1 from '../assets/member1.png'
import img2 from '../assets/member2.png'
import img3 from '../assets/member3.png'
import img4 from '../assets/member4.png'

const Review = () => {
    return (
        <div className="section bg-base-200">
        <div className="container mx-auto py-10 ">
          <h2 className="text-3xl font-bold  mb-5 flex justify-center items-center">Customer Reviews</h2>
         
          <div className="flex flex-wrap gap-[6.5rem]">
            <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
              <div className="review-item">
                <img src={img1} alt="John Doe" className="reviewer-image" />
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p>JobHub made my job hunt a breeze! The platform's intuitive interface and vast job listings helped me find the perfect role in no time. Highly recommended for anyone seeking a career upgrade.</p>
              </div>
            </div>
            <div className="w-1/2 sm:w-1/3 md-w-1/4 lg:w-1/5 xl:w-1/6">
              <div className="review-item">
                <img src={img2} alt="Jane Smith" className="reviewer-image" />
                <h3 className="text-xl font-semibold">Jane Smith</h3>
                <p>I'm thoroughly impressed with JobHub's user-friendly experience. It's more than just a job board; it's a comprehensive tool to manage applications and track job opportunities. A game-changer for job seekers!</p>
              </div>
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
              <div className="review-item">
                <img src={img3} alt="Robert Johnson" className="reviewer-image" />
                <h3 className="text-xl font-semibold">Robert Johnson</h3>
                <p>JobHub's search feature is fantastic. I could easily narrow down job options and apply with just a few clicks. It streamlined my job search process and helped me secure interviews quickly</p>
              </div>
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
              <div className="review-item">
                <img src={img4} alt="Emily Davis" className="reviewer-image" />
                <h3 className="text-xl font-semibold">Emily Davis</h3>
                <p>As a recruiter, JobHub has been invaluable. Its robust platform and applicant management system simplified the hiring process. Finding top talent has never been this efficient!</p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    );
};

export default Review;