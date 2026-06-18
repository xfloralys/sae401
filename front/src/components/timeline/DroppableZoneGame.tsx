import { useDrop } from "react-dnd";
import type { Card } from "../../types/card";

type Props = {
    slotIndex: number;
    card: Card | null;
    onDropCard: (
        card: Card,
        slotIndex: number
    ) => void;
}

const DroppableZoneGame = ({ slotIndex, card, onDropCard }: Props) => {
    const [{ isOver }, drop] = useDrop(
        () => ({
            accept: "CARD",
            canDrop: () => !card,
            drop: (item: Card) => {
                onDropCard(item, slotIndex);
            },
            collect: (monitor) => ({
                isOver: monitor.isOver(),
            }),
        }),
        [card, slotIndex, onDropCard]
    );

    return (
        <div
            ref={(node) => { drop(node) }}
            className={`aspect-square relative border border-black ${isOver ? "bg-gray-200" : ""
                }`}
        >
            <p className="absolute top-1 left-1 w-10 h-10 grid place-items-center rounded-full bg-black text-white text-2xl">
                {slotIndex + 1}
            </p>

            {card && (
                // <img
                // src={card.image}
                // alt={card.playerFirstName + " " + card.playerLastName}
                // className="w-full h-full object-cover"
                // />
                <article className="relative bg-slate-500 w-[182px] outline-5 rounded-lg outline-slate-600 overflow-hidden">
                    <figure className="w-full h-[220px]">
                        <img src={card.image} alt={card.altText} className="w-full h-full object-cover" />
                    </figure>

                    <aside className=" absolute left-1/2 bottom-[21.75%] translate-x-[-50%] border-5 border-slate-600 rounded-t-3xl overflow-hidden">
                        <ul className="bg-slate-700/90 flex justify-between items-center gap-5 px-4 py-1">
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
                        <h5 className="font-light truncate text-ellipsis">{card.season} NBA</h5>
                        <h3 className="uppercase truncate txt-ellipsis mt-[-6px]">Finals MVP</h3>
                    </div>
                </article>
            )}
        </div>
    );
};

export default DroppableZoneGame;