import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { redirect, useNavigate } from 'react-router-dom';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true); 
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate()

  const handleGoogleSuccess = (credentialResponse) => {
    const token = credentialResponse.credential;
    const decoded = jwtDecode(token);
    console.log('Decoded Google User:', decoded);
    setUserInfo(decoded);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isLogin ? 'Login' : 'Signup'} to Your Account
        </h2>
        <form className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-md"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md"
          />
          <button
            type="submit"
            onClick={() => navigate('/Dashboard')}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
          >
            {isLogin ? 'Login' : 'Signup'}
          </button>

        </form>

        <div className="my-4 text-center text-gray-500">OR</div>
        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => console.log('Google Login Failed')}

          />
        </div>
        <p className="mt-6 text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 hover:underline font-medium"
          >
            {isLogin ? 'Signup' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
