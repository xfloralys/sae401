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
                    src={card.image}
                    alt={card.player}
                    className="w-full h-full object-cover object-top"
                />
            </div>
            <div className="p-4">
                <h3 id={headingId}
                    className="text-xl font-semibold text-gray-800 truncate"
                >
                    {card.player}
                </h3>
                <h4 id={headingId}
                    className="text-lg text-gray-800 truncate"
                >
                    Équipe : {card.team}
                </h4>
                <h4 id={headingId}
                    className="text-lg italic text-gray-800 truncate"
                >
                    {card.season}
                </h4>
                <ul id={headingId} className="text-gray-800 truncate grid grid-cols-3 justify-items-center pt-4">
                    <li><p>PTS : {card.pointsPerGame}</p></li>
                    <li><p>TRB : {card.reboundsPerGame}</p></li>
                    <li><p>AST : {card.assistsPerGame}</p></li>
                </ul>

            </div>
        </article>
    );
};

export default CardPreview;
