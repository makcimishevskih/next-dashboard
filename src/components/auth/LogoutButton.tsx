"use client";

import { signOut } from 'next-auth/react';
import { redirect } from 'next/navigation'

const LogoutButton = () => {

  const mySignOut = () => {
    signOut();
    redirect('/')
  }

  return <button className='btn' onClick={mySignOut}>
    Sign Out
  </button>
}

export default LogoutButton;