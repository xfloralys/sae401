import type { Card } from "../../types/card";
import { useDrag } from "react-dnd";

type Props = {
  card: Card;
}

const DraggableCard = ({card}: Props) => {
    const [{isDragging}, drag] = useDrag(
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
            ref={(node) => {drag(node)}}
            className="overflow-hidden rounded-lg"
            style={{
                opacity: isDragging ? 0 : 1,
                zIndex: isDragging ? 1000 : 1,
            }}
        >
            <img
                src={card.image}
                alt={card.playerFirstName + " " + card.playerLastName}
                // draggable="false"
                className="w-full aspect-square object-cover"
            />
        </div>
    );
};

export default DraggableCard;