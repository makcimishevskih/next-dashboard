import { getSessionlUsername } from '@/lib/getSessionEmail';

import Link from 'next/link';
import LogoutButton from './auth/LogoutButton';

export default async function Header () {
  const userName = await getSessionlUsername();

  return (
    <header className='bg-gray-200 px-8 flex justify-between h-20 items-center'>
      <Link href="/" className='logo'>
        Trello
      </Link>

      {userName &&
        <div className='flex gap-2 items-center'>
          <h3>Hello, {userName}</h3>
          <LogoutButton />
        </div>
      }
    </header>
  );
}