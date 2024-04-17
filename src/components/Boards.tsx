'use server';

import getLiveblocksClient from '@/lib/getLiveblocksClient';
import { getSessionEmail } from '@/lib/getSessionEmail';
import Link from 'next/link';

const Boards = async () => {
  const email = await getSessionEmail();
  const { data: rooms } = await getLiveblocksClient().getRooms({ userId: email });

  return (
    <div>
      <h2 className='text-xl mb-4'>
        Your Email: {email}
      </h2>
      <div className='flex gap-4 mb-4 flex-wrap'>
        {rooms?.length > 0 ? (
          rooms.map(room => (
            <Link href={`/boards/${room.id}`} key={room.id} className='border rounded-md p-4 border-blue-300 bg-blue-100 min-h-36'>
              <div>
                <div>
                  Room ID is:
                  {room.id}
                </div>
                <div>
                  Room type: {room.type.toString()} {' '}
                </div>
                <div>
                  Date: {room.createdAt.toDateString()}
                </div>
              </div>
            </Link>)
          )) : (
          <h2>You don't have any rooms</h2>
        )}
      </div>
    </div>
  );
};
export default Boards;