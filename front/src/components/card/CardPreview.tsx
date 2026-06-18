import type { Card } from "../../types/card";

type Props = {
    card: Card;
    onViewDetail?: (card: Card) => void;
}

const CardPreview = ({ card, onViewDetail = () => { } }: Props) => {
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
        // <article className="bg-white shadow-xl rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
        //     <div className="h-120 overflow-hidden">
        //         <img
        //             src={card.image}
        //             alt={card.player}
        //             className="w-full h-full object-cover object-top"
        //         />
        //     </div>
        //     <div className="p-4">
        //         <h3 id={headingId}
        //             className="text-xl font-semibold text-gray-800 truncate"
        //         >
        //             {card.player}
        //         </h3>
        //         <h4 id={headingId}
        //             className="text-lg text-gray-800 truncate"
        //         >
        //             Équipe : {card.team}
        //         </h4>
        //         <h4 id={headingId}
        //             className="text-lg italic text-gray-800 truncate"
        //         >
        //             {card.season}
        //         </h4>
        //         <ul id={headingId} className="text-gray-800 truncate grid grid-cols-3 justify-items-center pt-4">
        //             <li><p>PTS : {card.pointsPerGame}</p></li>
        //             <li><p>TRB : {card.reboundsPerGame}</p></li>
        //             <li><p>AST : {card.assistsPerGame}</p></li>
        //         </ul>

        //     </div>
        // </article>

        <article className="relative bg-slate-500 w-[182px] outline-5 rounded-lg outline-slate-600 overflow-hidden">
            <figure className="w-full h-[220px]">
                <img src={card.image} alt={card.altText} className="w-full h-full object-cover" />
            </figure>

            <aside className=" absolute left-1/2 bottom-[21.75%] translate-x-[-50%] border-5 border-slate-600 rounded-t-3xl overflow-hidden">
                <ul id={headingId} className="bg-slate-700/90 flex justify-between items-center gap-5 px-4 py-1">
                    <li className="flex flex-col items-center">
                        <p className="text-white text-[11px]">PTS</p>
                        <p className="text-white mt-[-3px] font-bold">{card.pointsPerGame}</p>
                    </li>
                    
                    <li className="flex flex-col items-center">
                        <p className="text-white text-[11px]">TRB</p>
                        <p className="text-white mt-[-3px] font-bold">{card.reboundsPerGame}</p>
                    </li>

                    <li className="flex flex-col items-center">
                        <p className="text-white text-[11px]">AST</p>
                        <p className="text-white mt-[-3px] font-bold">{card.assistsPerGame}</p>
                    </li>
                </ul>
            </aside>

            <div className="w-full h-[20%] flex flex-col justify-center items-center py-1 border-t-5 border-slate-600">
                <h5 id={headingId} className="font-light truncate text-ellipsis">{card.playerFirstName}</h5>
                <h3 id={headingId} className="uppercase truncate txt-ellipsis mt-[-6px]">{card.playerLastName}</h3>
            </div>
        </article>
    );
};

export default CardPreview;
