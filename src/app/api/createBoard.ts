'use server';

import uniqid from 'uniqid';
import { RoomInfo } from '@liveblocks/node';

import { getSessionEmail } from '@/lib/getSessionEmail';
import getLiveblocksClient from '@/lib/getLiveblocksClient';

type CreateBoardT = {
  boardName: string;
}

export default async function createBoard(
  { boardName }: CreateBoardT
): Promise<RoomInfo | false> {
  const liveblocksClient = getLiveblocksClient()

  const email = await getSessionEmail();
  const roomId = uniqid();

  if (email) {  
    const roomInfo = await liveblocksClient.createRoom(
      roomId, {
        defaultAccesses: [],
        usersAccesses: {
          [email]: ['room:write']
        },
        metadata: {
          boardName
        }
      }
    );

    return roomInfo;
  }

  return false
}

