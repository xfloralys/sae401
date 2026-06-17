import { create } from "zustand";
import type { CardOrderStore } from "./cardOrder.types";
import type { Card } from "../../types/card";
import type { CardOrder } from "../../types/cardOrder";
import { useCardStore } from "../card/useCardStore";

export const useCardOrderStore = create<CardOrderStore>((set, get) => ({
    cardOrder: null,
    currentTimeline: [],
    actions: {
        generateCardOrder: (cards: Card[]) => {
            const seasons = cards.map((c) => {
                const seasonArray = c.season.split("-");
                return Number.parseInt(seasonArray[0]);
            });
            const generatedOrder: CardOrder = Object.create(
                [0, cards.sort((a, b) => seasons[a.id] - seasons[b.id])] // reverse() ne marche pas..
            );
            set(() => ({cardOrder: generatedOrder}));
            // console.log("Ordre des cartes : ");
            // console.log(generatedOrder);
        },
        initTimeline: (cards: Card[]) => {
            set({currentTimeline: Array.from(cards).map((c, idx) => idx !== 0 ? null : Math.floor((Math.random() * cards.length - 1)).toString())});
            // const {currentTimeline} = get();
            // console.log("TIMELINE");
            // console.log(currentTimeline);
        },
        setCardAt: (card, slotIdx) => {
            const {cards} = useCardStore.getState();
            if (slotIdx < 0 || slotIdx > cards.length) {
                throw new Error("Slot index invalide");
            }
            const {currentTimeline} = get();
            if (currentTimeline[slotIdx] !== null) {
                return;
            }
            const updated = [...currentTimeline];
            updated[slotIdx] = card.id.toString();
            set({currentTimeline: updated});
        },
    }
}))