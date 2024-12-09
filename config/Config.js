const BASE_URL = "http://localhost:3001";

const API_URLS = {
  // Catagory API's use in Catagories and Courses component
  Catagory_enabled: `${BASE_URL}/categories/enabled`,

  // Course API's use in  Courses Page
  Course_enabled: `${BASE_URL}/courses/enabled`,

  //Popular Course API's use in Popular Courses Page
  Course_Popular_enabled: `${BASE_URL}/courses/enabled/popular`,

  //Related Course API's use in Related Course Page
  Course_Related_enabled: `${BASE_URL}/courses/details`,

  // Course Description API's use in  Courses Description Component
  Course_Description: `${BASE_URL}/courses/course/details`,

  // Enrollment API's use in Enviroment component
  Enrollment_post: `${BASE_URL}/enrollments/enroll`,

  // Inquerry API's use in Inquiry component
  post_Inquiry: `${BASE_URL}/inquiries/postInquiry`,

  // Check session API's use in enrollment and Header component
  Check_Session: `${BASE_URL}/checkSession`,

  // SignIn API's use in Sign in page
  SignIn: `${BASE_URL}/students/signin`,

  // SignUp API's use in Sign Up page
  SignUp: `${BASE_URL}/students/signup`,

  // Log out API's use in Sign Up page
  LogOut: `${BASE_URL}/students/logout`,

  // get user information
  getInfo : `${BASE_URL}/students/student/profile`
};
export default API_URLS;
