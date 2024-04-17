"use client";

import { signIn } from 'next-auth/react';

const LoginButton = () => {

  const mySignIn = () => {
    signIn('google');
  }

  return <button className='btn' onClick={mySignIn}>
    Sign In
  </button>
}

export default LoginButton;