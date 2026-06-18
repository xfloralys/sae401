import { create } from "zustand";
import type { CardOrderStore } from "./cardOrder.types";
import type { Card } from "../../types/card";
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
            const generatedOrder: Card[] = Object.create(
                [...cards.sort((a, b) => seasons[a.id] - seasons[b.id])]
            );
            set({cardOrder: {
                id: 0,
                order: generatedOrder
            }});
        },
        initTimeline: (cards: Card[]) => {
            set({currentTimeline: [null, Math.floor((Math.random() * cards.length - 1)).toString(), null]});
        },
        setCardAt: (card, slotIdx) => {
            const {cards} = useCardStore.getState();
            const {isOrderCorrect} = get().actions;

            if (slotIdx < 0 || slotIdx > cards.length) {
                throw new Error("Slot index invalide");
            }
            const {currentTimeline} = get();
            if (currentTimeline[slotIdx] !== null) {
                return;
            }

            // Tentative d'insertion de la carte; si l'ordre correspond à celui que l'on recherche, la carte peut être placée. Sinon, rien ne se passe
            const updated = [...currentTimeline.slice(0, slotIdx), null, card.id.toString(), null, ...currentTimeline.slice(slotIdx + 1)]; 
            return isOrderCorrect(updated) ? set({currentTimeline: updated}) : set({currentTimeline: currentTimeline});
        },
        isOrderCorrect: (newTimeline) => {
            let errorFound = false;
            const iterable = [...newTimeline.filter((c) => c !== null)];
            iterable.map((cardId, idx) => {
                const tempCardId = cardId;
                const tempNextCardId = iterable[idx + 1];
                if ((idx + 1 < iterable.length) && !errorFound) {
                    errorFound = Number.parseInt(tempCardId) < Number.parseInt(tempNextCardId) ? true : false;
                }
            });
            return errorFound ? false : true;
        }
    }
}))