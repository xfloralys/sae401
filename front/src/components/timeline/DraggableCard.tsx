import type { Card } from "../../types/card";
import { useDrag } from "react-dnd";

type Props = {
    card: Card;
}

const DraggableCard = ({ card }: Props) => {
    const [{ isDragging }, drag] = useDrag(
        () => ({
            type: "CARD",
            item: card,
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
        }),
        [card]
    );

    return (
        <div
            ref={(node) => { drag(node) }}
            className="overflow-hidden rounded-lg"
            style={{
                opacity: isDragging ? 0 : 1,
                zIndex: isDragging ? 1000 : 1,
            }}
        >
            {/* <img
                src={card.image}
                alt={card.playerFirstName + " " + card.playerLastName}
                // draggable="false"
                className="w-full aspect-square object-cover"
            /> */}

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
                    <h5 className="font-light truncate text-ellipsis w-40 overflow-hidden whitespace-nowrap text-center">{card.playerFirstName}</h5>
                    <h3 className="uppercase truncate txt-ellipsis mt-[-6px] w-40 overflow-hidden whitespace-nowrap text-center">{card.playerLastName}</h3>
                </div>
            </article>
        </div>
    );
};

export default DraggableCard;