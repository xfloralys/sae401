import { create } from "zustand";
import type { ArtworkStore } from "./artwork.types";

const API_URL = import.meta.env.VITE_API_URL;

export const useArtworkStore = create<ArtworkStore>((set) => ({
    artworks: [],
    status: "idle",
    actions: {
        loadArtworks: async () => {
            set(() => ({status: "loading"}));
            const data = await fetch(API_URL)
            .then(resp => resp.json())
            .catch(error => {
                    console.log(error);
                    set(() => ({status: "error"}));
            });
            set(() => ({status: "success"}));
            set(() => ({artworks: data}));
            return data;
        }
    }
}))

export const useArtworks = () => useArtworkStore((state) => state.artworks);
export const useArtworksStatus = () => useArtworkStore((state) => state.status);
export const useArtworkActions = () => useArtworkStore((state) => state.actions);
export const useArtworksCount = () => useArtworkStore((state) => state.artworks.length);