import { useState } from "react";
import ArtworkPreview from "./ArtworkPreview";
import type { ArtworkData } from "../../types/artwork";
import ArtworkDetail from "./ArtworkDetail";

type Props = {
  artworks: ArtworkData[]
}

const ListArtworks = ({artworks}: Props) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleView = (art: ArtworkData) => {
    setSelectedId((prev) => (art.id === prev ? null : art.id));
  }

  const closeView = () => {
    setSelectedId(() => null);
  }

  return (
    <>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))]  gap-6 p-4">
       { artworks.map((art) => (
          <li>
            <ArtworkPreview
              artwork = {art}
              onViewDetail = {handleView}
            ></ArtworkPreview>
            { selectedId === art.id && 
              <ArtworkDetail
                artwork = {art}
                onClose = {closeView}
              ></ArtworkDetail>
            }
          </li>
       )) }
      </ul>
    </>
  );
};

export default ListArtworks;
