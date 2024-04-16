import { CardsT } from '@/components/Board';
import { Dispatch, SetStateAction } from 'react';
import { ReactSortable } from "react-sortablejs";


type ColumnT = {
  id: string;
  name: string;
  cards: CardsT[];
  setCards: Dispatch<SetStateAction<CardsT[]>>;
}

const Column = ({
  id,
  name,
  cards,
  setCards
}: ColumnT) => {

  const setCardsForColumn = (sortedCards: CardsT[], newColId: string) => {
    [...sortedCards].forEach((card, i) => {
      card.index = i;
      if (card.columnId !== newColId) {
        card.columnId = newColId;
      }
    });

    setCards((prev: CardsT[]) => ([...prev]))
  }

  return (
    <div className='w-48 bg-white shadow-sm rounded-md p-2 cursor-grab'>
      <h3>
        {name}
      </h3>
      <ReactSortable
        list={cards}
        setList={(cards) => setCardsForColumn(cards, id)}
        group='cards'
        className='min-h-16'
        animation={150}
        chosenClass='sortable-chosen'
      >

        {cards.map(card => (
          <div
            key={card.name}
            className='border my-2 py-3 px-4 rounded-md cursor-grab h-full'>
            <span>
              {card.name}
            </span>
          </div>
        ))}
      </ReactSortable>
    </div >
  );
};

export default Column;
// SHA256: NF6DdXfuZY96CKtdNKnI9uzBErwWlNTmHBRSKbXxt1w
