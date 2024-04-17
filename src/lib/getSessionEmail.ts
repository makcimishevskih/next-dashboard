import { getServerSession } from 'next-auth';
import { authOptions } from './authOptions';

const getSessionEmail = async() => {
  const session =  await getServerSession(authOptions);
  return session?.user?.email || '';
}

const getSessionlUsername = async() => {
  const session =  await getServerSession(authOptions);
  return session?.user?.name || '';
}

export { 
  getSessionEmail,
  getSessionlUsername 
};