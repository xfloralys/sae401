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

const DroppableZoneGame = ({slotIndex, card, onDropCard}: Props) => {
    const [{isOver}, drop] = useDrop(
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
            ref={(node) => {drop(node)}}
            className={`aspect-square relative border border-black ${
                isOver ? "bg-gray-200" : ""
            }`}
        >
            <p className="absolute top-1 left-1 w-10 h-10 grid place-items-center rounded-full bg-black text-white text-2xl">
                {slotIndex + 1}
            </p>

            {card && (
                <img
                src={card.image}
                alt={card.playerFirstName + " " + card.playerLastName}
                className="w-full h-full object-cover"
                />
            )}
        </div>
    );
};

export default DroppableZoneGame;