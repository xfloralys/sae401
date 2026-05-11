import type { ArtworkData } from "../../types/artwork";
import { useDrag } from "react-dnd";

type Props = {
  artwork: ArtworkData;
}

const DraggableArtwork = ({ artwork }: Props) => {
  const [{isDragging}, drag, dragPreview] = useDrag(() => ({
    type: "card",
    item: {artwork},
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }), [artwork]);

   return (
   
      <div className="overflow-hidden  rounded-lg" draggable="true"
        ref = {(node) => {
            drag(node);
          }
        }
        style={{
          opacity: isDragging ? 0 : 1,
          zIndex: isDragging ? 1000 : 1
        }}
      >
        <img 
          src={artwork.image} 
          alt={artwork.title} 
          draggable="false"
          className="w-full aspect-square object-cover"
           // Désactive le drag natif de l’image
        />
      </div>

  );
};

export default DraggableArtwork;

/*
 * A chaque fois qu'on voit "ref = {drag}" dans le cours, il faut remplacer par
 *
 * ref = {(node) => {
 *    drag(node);
 *  }
 * }
 * 
 * pareil pour "drop".
*/
