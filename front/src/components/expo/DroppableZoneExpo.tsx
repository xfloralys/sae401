// import { useArtworksExpoBySlot } from "../../stores/expo/expo.selectors";
import type { ArtworkData } from "../../types/artwork";

type Props = {
  slot: number,
  artwork: ArtworkData | null
}

const DroppableZoneExpo = ({ slot, artwork }: Props) => {
  // const artworksExpoBySlot = useArtworksExpoBySlot();

  if (artwork !== null) {
    return (
      <div
        className="aspect-square relative border border-black"
      >
        <img src={artwork.image} alt={artwork.title} className="w-full h-full object-cover"></img>
        <p className="absolute top-1 left-1 w-10 h-10 grid place-items-center rounded-full bg-black text-white text-2xl">{slot}</p>
      </div>
    );
  }

  return (
    <div
      className="aspect-square relative border border-black"
    >
      <p className="absolute top-1 left-1 w-10 h-10 grid place-items-center rounded-full bg-black text-white text-2xl">{slot}</p>
    </div>
  );
};

export default DroppableZoneExpo;
