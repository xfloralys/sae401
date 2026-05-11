import type { ArtworkData } from "../../types/artwork.ts";

export type ArtworkStore = {
    artworks: ArtworkData[],
    status: ("idle" | "loading" | "success" | "error"),
    actions: ArtworkActions
}

export type ArtworkActions = {
    loadArtworks: () => Promise<void>;
}