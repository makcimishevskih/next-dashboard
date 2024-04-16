'use client';
import { FormEvent, useState } from 'react';
import { z } from 'zod'

const newColumnSchema = z.object({
  newColumnName: z.string().trim().min(1, {
    message: 'New column name must be at least 1 character long'
  }).max(20, {
    message: 'New column name must be at most 20 character long'
  })
}).required();

const NewColumnForm = () => {

  // const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const handleNewColumn = async (
    // e: FormEvent<HTMLFormElement>
    formData: FormData
  ) => {
    setError('');

    const newColumn = newColumnSchema.safeParse({
      newColumnName: formData.get('newColumnName')
    });

    if (!newColumn.success) {
      let error = '';
      newColumn.error.issues.forEach(el => {
        error += el.message + ''
      })

      setError(error.trim());
      return;
    }

    console.log('all is ok', newColumn.data);
    // e.preventDefault();
    // const formData = schema.parse(new FormData(e.currentTarget));

    // const response = await fetch('someapi', {
    //   method: 'POST',
    //   body: formData
    // });

  }

  return (
    <form
      action={handleNewColumn}
      //  onSubmit={handleNewColumn} 
      className='max-w-xs'>
      <label htmlFor="newColumn" className='block mb-2'>
        <span className='text-gray-600 block'>
          Column name:
        </span>
        <input className='' id='newColumn' type="text" name='newColumnName' placeholder='Type new column name...' />
      </label>
      <button className='mt-2' type='submit'>Create column</button>
    </form>
  );
};
export default NewColumnForm;