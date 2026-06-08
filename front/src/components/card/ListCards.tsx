import { useState } from "react";
import CardPreview from "./CardPreview";
import type { Card } from "../../types/card";
import CardDetail from "./CardDetail";

type Props = {
  cards: Card[]
}

const ListCards = ({cards}: Props) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleView = (card: Card) => {
    setSelectedId((prev) => (card.id === prev ? null : card.id));
  }

  const closeView = () => {
    setSelectedId(() => null);
  }

  // console.log("--- Vérif des données dans ListCards.tsx ---");
  // console.log(cards);

  return (
    <>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))]  gap-6 p-4">
       { cards.map((card) => (
          <li key={card.id}>
            <CardPreview
              card = {card}
              onViewDetail = {handleView}
            ></CardPreview>
            { selectedId === card.id && 
              <CardDetail
                card = {card}
                onClose = {closeView}
              ></CardDetail>
            }
          </li>
       )) }
      </ul>
    </>
  );
};

export default ListCards;
