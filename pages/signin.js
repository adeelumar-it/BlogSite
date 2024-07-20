// import * as React from 'react';
// import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Link from 'next/link';
 import axios from 'axios';


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { useRouter } from 'next/router';


function LoginPage() {
  const router = useRouter();



  
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/login', formData);
      console.log('Response:', response.data);
  
      window.localStorage.setItem('loginInfo', JSON.stringify(response.data));
      router.push('/');
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };
  
  const [isSignUpMode, setIsSignUpMode] = React.useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  

  return (
    <div>

    
    
    
        <div className="min-h-screen flex items-center justify-center" style={{    background: "#f6f1f1f" }}>
       
          <div className="w-96"  style={{border:" solid gainsboro", borderRadius: "11px"}}>
            <div className="p-4 bg-white shadow-md rounded-lg">
              <h2 className="text-2xl text-center font-semibold mb-4">Signin</h2>
              <form onSubmit={handleSubmit}>
            
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-gray-300 border rounded-md py-2 px-3"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-gray-700">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full border-gray-300 border rounded-md py-2 px-3"
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Signin
                  </button>
                </div>
                <div className="text-center">
                 <span>
                 Don't have account
                 <Link href="/signup" className="w-full py-2 px-4 rounded-md text-blue-500 mt-2">
                 SignUP
                 </Link>
                 </span>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>

    
  )}

  export default LoginPage

  