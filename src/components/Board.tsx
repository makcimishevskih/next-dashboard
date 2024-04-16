'use client';

import Column from '@/components/Column';
import NewColumnForm from '@/components/forms/NewColumnForm';
import { DragEvent, useState } from 'react';
import { ReactSortable } from "react-sortablejs";

export type DragT = DragEvent<HTMLDivElement>

export type ColT = {
  id: string,
  name: string
}

export type CardsT = {
  id: string,
  name: string,
  index: number,
  columnId: string
}

export const defaultColumns: ColT[] = [
  { id: 'col1', name: 'Todos' },
  { id: 'col2', name: 'In Progress' },
  { id: 'col3', name: 'Done' },
]

export const defaultCards: CardsT[] = [
  { id: 'qwe', name: 'task1', index: 0, columnId: 'col1' },
  { id: 'qweasd', name: 'task2', index: 1, columnId: 'col1' },
  { id: 'qweasda', name: 'task3', index: 2, columnId: 'col1' },
  { id: 'asd', name: 'task4', index: 0, columnId: 'col2' },
  { id: 'asdaa', name: 'task5', index: 1, columnId: 'col2' },
  { id: 'zxc', name: 'task6', index: 0, columnId: 'col3' }
]


const Board = () => {
  const [cols, setCols] = useState(defaultColumns);
  const [cards, setCards] = useState(defaultCards);

  return (
    <div className='flex gap-4 flex-wrap'>
      <ReactSortable className='flex gap-4 flex-wrap min-h-52' list={cols} setList={setCols}
      animation={150}
      ghostClass='opacity-20'
      >
        {cols.map((col) =>
          <Column
            key={col.name}
            cards={cards.filter(card => card.columnId === col.id).sort((a, b) => a.index - b.index)}
            setCards={setCards}
            {...col}
          />)
        }
      </ReactSortable>

      <NewColumnForm />
    </div>
  );
};

export default Board;