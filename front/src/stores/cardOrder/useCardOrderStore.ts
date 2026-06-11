import { create } from "zustand";
import type { CardOrderStore } from "./cardOrder.types";
import type { Card } from "../../types/card";
import type { CardOrder } from "../../types/cardOrder";

export const useCardOrderStore = create<CardOrderStore>((set) => ({
    cardOrder: null,
    actions: {
        generateCardOrder: (cards: Card[]) => {
            const seasons = cards.map((c) => {
                const seasonArray = c[1].split("-");
                return Number.parseInt(seasonArray[0]);
            });
            const generatedOrder: CardOrder = Object.create(
                [0, cards.sort((a, b) => seasons[a[0]] - seasons[b[0]])] // reverse() ne marche pas..
            );
            set(() => ({cardOrder: generatedOrder}));
            // console.log("Ordre des cartes : ");
            // console.log(generatedOrder);
        }
    }
}))