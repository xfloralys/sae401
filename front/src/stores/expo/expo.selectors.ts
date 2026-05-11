import { useArtworkStore } from "../artwork/useArtworkStore";
import { useExpoStore } from "./useExpoStore";

export const useExposedSlots = () => useExpoStore((state) => state.exposedSlots);
export const useExpoActions = () => useExpoStore((state) => state.actions);
export const useArtworksExpoBySlot = () => {
    const artworks = useArtworkStore((state) => state.artworks);
    const exposedSlots = useExpoStore((state) => state.exposedSlots);
    return exposedSlots.map((art) => art != null ? artworks.find((e) => e.id === art) : null);
}
export const useArtworksExpo = () => {
    const artworks = useArtworkStore((state) => state.artworks);
    const exposedSlots = useExpoStore((state) => state.exposedSlots);
    return exposedSlots.map((art) => art != null ? artworks.find((e) => e.id === art) : null)
                       .filter((e) => e != null);
}