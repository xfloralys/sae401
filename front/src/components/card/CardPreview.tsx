import type { Card } from "../../types/card";

type Props = {
  card: Card;
  onViewDetail?: (card: Card) => void;
}

const CardPreview = ({ card, onViewDetail = () => {} }: Props) => {
  const headingId = `card-title-${card.id}`;
  const buttonId = `card-button-${card.id}`;

  // console.log("--- Vérif des données dans CardPreview.tsx ---");
  // console.log(card[1]);

  /* 0 = id
   * 1 = season
   * 2 = player
   * 3 = team
   * 4 = pointsPerGame
   * 5 = reboundsPerGame
   * 6 = assistsPerGame
   * 7 = image
   */

 return (
        <article className="bg-white shadow-xl rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
            <div className="h-120 overflow-hidden">
                <img
                    src={card[7]}
                    alt={card[2]}
                    className="w-full h-full object-cover object-top"
                />
            </div>
            <div className="p-4">
                <h3 id={headingId}
                    className="text-xl font-semibold text-gray-800 truncate"
                >
                    {card[2]}
                </h3>
                <h4 id={headingId}
                    className="text-lg text-gray-800 truncate"
                >
                    Équipe : {card[3]}
                </h4>
                <h4 id={headingId}
                    className="text-lg italic text-gray-800 truncate"
                >
                    {card[1]}
                </h4>
                <ul id={headingId} className="text-gray-800 truncate grid grid-cols-3 justify-items-center pt-4">
                    <li><p>Points : {card[4]}</p></li>
                    <li><p>Rebonds : {card[5]}</p></li>
                    <li><p>Assists : {card[6]}</p></li>
                </ul>

            </div>
        </article>
    );
};

export default CardPreview;
