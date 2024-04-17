import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import LoginButton from '@/components/auth/LoginButton';
import Link from 'next/link';
import Boards from '@/components/Boards';

export default async function Home () {
  const session = await getServerSession(authOptions)

  if (!session) {
    return (
      <div className='flex justify-center items-center h-full'>
        <LoginButton />
      </div>
    )
  }

  const RightArrowIcon = <FontAwesomeIcon icon={faArrowRight} className='h-6' />

  return (
    <div>
      <h1 className='text-4xl mb-4'>Your boards:</h1>

      <Boards />

      <Link href={'/new-board'} className='btn inline-flex gap-4'>
        <span>
          Create new board
        </span>
        {RightArrowIcon}
      </Link>
    </div>
  );
}
