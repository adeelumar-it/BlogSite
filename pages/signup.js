import * as React from 'react';
import axios from 'axios';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SignupForm = () => {
  const router = useRouter();

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
  });

  const [error, setError] = React.useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.name || !formData.email || !formData.password) {
      setError('All fields are required');
      return;
    }

    axios.post('https://blog-site1122.vercel.app/api/user', formData)
      .then(response => {
        console.log('Response:', response.data);
        router.push('/signin');
      })
      .catch(error => {
        console.error('Error:', error);
        setError('Something went wrong. Please try again.');
      });
  };

  return (
    <div>
      <div>
        <button className="hover:bg-blue-700 hover:text-white font-bold py-2 px-2 ml-3 rounded">
          <Link href='/'>
            <CloseRoundedIcon />Cancel
          </Link>
        </button>
      </div>

      <div className="min-h-screen flex items-center justify-center" style={{ background: "#f6f1f1" }}>
        <div className="w-96" style={{ border: "solid gainsboro", borderRadius: "11px" }}>
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl text-center font-semibold mb-4">Sign Up</h2>
            <form onSubmit={handleSubmit}>
              {error && <p className="text-red-500 text-center mb-4">{error}</p>}
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-gray-300 border rounded-md py-2 px-3"
                />
              </div>
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
                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                  Sign Up
                </button>
              </div>
              <div className="text-center mt-4">
                <span>
                  Already have an account?{' '}
                  <Link href="/signin" className="text-blue-500">
                    Sign In
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
