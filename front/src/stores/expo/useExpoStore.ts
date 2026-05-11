import { create } from "zustand";
import type { ExpoStore } from "./expo.types";

export const useExpoStore = create<ExpoStore>(() => ({ 
    exposedSlots: ["1","13",null,null,"19",null,null,null,null,null],
    actions: {
        loadAction: () => {},
        setArtworkArt: () => {},
        resetExpo: () => {}
    }})
)