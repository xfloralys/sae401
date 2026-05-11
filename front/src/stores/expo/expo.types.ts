import type { ArtworkData } from "../../types/artwork"

export type ExpoStore = {
    exposedSlots: Array<string | null>,
    actions: ExpoActions
}

export type ExpoActions = {
    loadAction: () => void,
    setArtworkArt: (artwork: ArtworkData, slotIndex: number) => void,
    resetExpo: () => void
}