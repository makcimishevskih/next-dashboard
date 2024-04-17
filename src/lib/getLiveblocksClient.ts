import { Liveblocks } from '@liveblocks/node';

const getLiveblocksClient = () => {
  return new Liveblocks({
    secret: process.env.LIVEBLOCKS_API_KEY || ''
  });
}

export default getLiveblocksClient;