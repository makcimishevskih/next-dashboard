'use client';

import { redirect } from 'next/navigation';
import createBoard from './api/createBoard';

const NewBoardPage = () => {
  const handleNewBoardSubmit = async (formData: FormData) => {
    const boardName = formData.get('board-name')?.toString() || "";

      const room = await createBoard({ boardName });
    //   if (room) {
    //     const id = room?.id 
    //     redirect(`/boards/${id}`)
    //   }
  }

  return (
    <div className='w-[40%] m-auto'>
      <h1 className='text-2xl text-center mb-4'>Create new board</h1>
      <form action={handleNewBoardSubmit}>
        <input className='mb-4' placeholder='Board name...' name='board-name' />
        <button type='submit' className='btn w-full'>Create board</button>
      </form>
    </div>
  );
};

export default NewBoardPage;