

const Blogs = () => {
    return (
    <div className="m-10">
        <div className="collapse collapse-arrow bg-yellow-200">
  <input type="radio" name="my-accordion-2" checked="checked" /> 
  <div className="collapse-title text-2xl font-medium">
  What is an access token and refresh token? How do they work and where should we
store them on the client-side?
  </div>
  <div className="collapse-content"> 
  <h2 className="text-xl font-medium ">
    Access Token
    </h2>
 

An access token is a short-lived credential that allows the client application to access specific resources on behalf of the user. Access tokens typically have a short lifetime, ranging from a few minutes to a few hours. This is to minimize the risk of an attacker gaining unauthorized access to the user's resources if the token is compromised.

Access tokens are typically sent to the resource server in the Authorization header of an HTTP request. The resource server verifies the access token and, if it is valid, allows the client application to access the requested resources.
<h2 className="text-xl font-medium ">
Refresh Token
</h2>


A refresh token is a long-lived credential that allows the client application to obtain a new access token when the current access token expires. Refresh tokens typically have a lifetime of several weeks or months.

Refresh tokens are not sent to the resource server. Instead, they are stored by the client application and sent to the authorization server when a new access token is needed. The authorization server verifies the refresh token and, if it is valid, issues a new access token to the client application.

<h2 className="text-xl font-medium ">
Where to Store Access Tokens and Refresh Tokens
</h2>


Access tokens and refresh tokens should be stored securely on the client-side. This means that they should not be stored in plain text or easily accessible locations. Instead, they should be stored in an encrypted form or in a secure storage mechanism, such as a secure enclave.

Here are some specific recommendations for storing access tokens and refresh tokens on the client-side:

Access tokens: Access tokens should be stored in memory for as short a time as possible. Once the access token is no longer needed, it should be invalidated and removed from memory.

Refresh tokens: Refresh tokens should be stored in a secure storage mechanism, such as a secure enclave. Refresh tokens should not be stored in cookies or in local storage.

By following these recommendations, you can help to protect access tokens and refresh tokens from unauthorized access.
  </div>
</div>
<div className="collapse collapse-arrow bg-blue-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  What is express js? What is Nest JS
  </div>
  <div className="collapse-content"> 
  <h2 className="text-xl font-medium ">
  express js
</h2>
<p>Express.js is a popular, lightweight, unopinionated Node.js web application framework that provides a minimal set of features for building web applications and APIs. It is a popular choice for developers who want more control over the structure of their applications.</p>
<h2 className="text-xl font-medium ">
Nest JS
</h2>
<p>Nest.js is a progressive, TypeScript-based, and opinionated framework for building web applications with Node.js. It is built on top of Express.js and provides a number of additional features, such as dependency injection, modules, and decorators.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-red-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  Explain your code.
  </div>
  <div className="collapse-content"> 
  1.Project Setup:  firstly we setup project for client side and server side and install firebase,tailwind and daisyui.
  <br />
  1.1 database:For database ,we use mongodb.
  <br />

2.Component Structure: Organize your components into appropriate folders .
<br />

3.Styling:  i use a CSS framework like Tailwind CSS and customize the styles to create a unique design.
<br />
4.Navigation: Create a navigation bar that is present on all pages, except the 404 page. Include links to the Home, All Jobs, Applied Jobs, Add A Job, My Jobs, Blogs, and User Profile. Customize the navbar based on whether the user is logged in or not. Display the user profile picture and name when available.
<br />

5.Login & Registration:here Firebase is used for Login & registration.. Implement the login and registration pages. Display relevant error messages when necessary. Allow users to log in using email/password and Google Sign-In. The registration page should include fields for name, email, password, and a photo URL.
<br />

6.Home Page:

here create a banner section with a heading, short description, and a search input field with a button.
Implement a tab system for different job categories . Use a library like react-tabs or create your own tab system.
Display job cards for each category, showing information such as the job poster name, job title, posting date, application deadline, salary range, and the number of job applicants.
Provide a View Details button, and if the user is not logged in, show a notification prompting them to log in.
Blogs Page: Create a blog page that answers specific questions. Provide detailed explanations of concepts.
<br />
7.All Jobs Page:

Display jobs in a tabular form, showing information about the job poster name, job title, posting date, application deadline, salary range, and a Details button.
Implement a search system based on the job title.
If a user clicks the Details button without being logged in, redirect them to the login page.
Single Job Details:
<br />
8.Create a private route.
Display job details, including the company logo, job banner, job title, description, salary range, number of applicants, and an Apply button.
Implement an apply button that opens a modal with the user name and email auto-filled. Include an input field for submitting a resume link.
Add a Submit Application button to save the application to a MongoDB collection.
Prevent applicants from applying if the deadline is over.
<br />
9.Add A Job Page:

Create a private route for adding jobs.
Design a form with fields for the job banner URL, job title, user name, job category, salary range, job description, posting date, and application deadline.
Automatically set the job applicant number to 0.
Implement a form for adding jobs, and update the applicant number accordingly.
<br />
10.My Jobs Page:
Create a private route for viewing jobs posted by the logged-in user.
Display a list of the user jobs with Update and Delete buttons.
Allow users to update job information or delete jobs, with confirmation dialogs.
<br />
11.Applied Jobs Page:
Create a private route for viewing jobs that the user has applied for.
Implement a filter system based on job categories.
<br />
12.CRUD Operations: Provide feedback to users for CRUD operations using toast notifications or similar methods where we use mongodb.
<br />

13.404 Page: Create a 404 page with an interesting image or GIF, and include a "Back to Home" button to redirect users to the home page.
<br />
14.Footer: Include a meaningful footer on all pages, except the 404 page. The footer should display the website logo, name, copyright information, contact details, social media links, and an address.
<br />
15.Testing: Thoroughly test your application to ensure that all functionalities work as expected. Test both user and admin roles if applicable.
<br />
16.Deployment: Deploy your application to vercel and firebase, and make it accessible to users.
  </div>
</div>
    </div>
    );
};

export default Blogs;