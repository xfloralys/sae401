
import DraggableArtwork from "../components/expo/DraggableArtwork";
import DroppableZoneExpo from "../components/expo/DroppableZoneExpo";
import Header from "../components/Header";
import { useArtworks } from "../stores/artwork/useArtworkStore";
import { useArtworksExpoBySlot } from "../stores/expo/expo.selectors";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
// import { useMemo } from "react";

export function DndContainer() {
  const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
  const backend = isTouchDevice ? TouchBackend : HTML5Backend;

  return (
    <DndProvider backend={backend}>
      
    </DndProvider>
  )
}

const ExpoComposer = () => {
  const artworks = useArtworks();
  const exposedSlots = useArtworksExpoBySlot();
  const artworksNonPresentes = artworks.filter((e) => !exposedSlots.includes(e)); 

  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <section className="grid gap-4">
          <h2>Composer votre expo <span className="text-lg">(Déplacez les œuvres vers la zone d'exposition )</span></h2>
          {/* Zone pour sélectionner les oeuvres */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(4rem,1fr))] gap-4">
            { artworksNonPresentes.map((art) => (
              <DraggableArtwork artwork={art}></DraggableArtwork>
            )) }
          </div>

          {/* Zone pour déposer les oeuvres */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] gap-4">
            { exposedSlots.map((slot, idx) => (
              <DroppableZoneExpo
                slot={idx + 1}
                artwork={slot ?? null}
              ></DroppableZoneExpo>
            ))}
          </div>
          <button
            className="mt-4 p-2 bg-blue-500 text-white rounded place-self-center"
          >
            Recommencer l'exposition
          </button>
        </section>
      </main>
    </>
  );
};

export default ExpoComposer;