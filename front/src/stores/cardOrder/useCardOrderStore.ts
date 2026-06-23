import { create } from "zustand";
import type { CardOrderStore } from "./cardOrder.types";
import type { Card } from "../../types/card";
import { useCardStore } from "../card/useCardStore";

export const useCardOrderStore = create<CardOrderStore>((set, get) => ({
    cardOrder: null,
    currentTimeline: [],
    nbErrors: 0,
    score: 0,
    actions: {
        generateCardOrder: (cards) => {
            const seasons = cards.map((c) => {
                const seasonArray = c.season.split("-");
                return Number.parseInt(seasonArray[0]);
            });
            const generatedOrder: Card[] = Object.create([...cards.sort((a, b) => seasons[a.id] - seasons[b.id])]);
            set({cardOrder: {id: 0,order: generatedOrder}});
        },
        initTimeline: (cards) => {
            set({ currentTimeline: [null, Math.floor((Math.random() * cards.length - 1)).toString(), null] });
        },
        tryToSetCardAt: (_playerCards, gamemode, card, slotIdx) => {
            const { cards } = useCardStore.getState();
            const { isOrderCorrect } = get().actions;

            if (slotIdx < 0 || slotIdx > cards.length) {
                throw new Error("Slot index invalide");
            }
            const { currentTimeline } = get();
            if (currentTimeline[slotIdx] !== null) {
                return;
            }

            // Tentative d'insertion de la carte
            const updated = [...currentTimeline.slice(0, slotIdx), null, card.id.toString(), null, ...currentTimeline.slice(slotIdx + 1)];

            const isCorrect: boolean = isOrderCorrect(gamemode, updated);
            set({ currentTimeline: isCorrect ? updated : currentTimeline });

            return isCorrect;
        },
        isOrderCorrect: (gamemode, newTimeline) => {
            const { nbErrors, score } = get();
            let errorFound = false;

            const iterable = [...newTimeline.filter((c) => c !== null)];
            iterable.map((cardId, idx) => {
                const tempCardId = cardId;
                const tempNextCardId = iterable[idx + 1];
                if ((idx + 1 < iterable.length) && !errorFound) {
                    errorFound = Number.parseInt(tempCardId) < Number.parseInt(tempNextCardId);
                }
            });

            // Mode classique  : s'il y a une erreur
            set({ nbErrors: gamemode === 1 || gamemode === 2 ? (errorFound ? nbErrors + 1 : nbErrors) : nbErrors });
            // Mode challenge : le joueur gagne un point si le placement est correct
            set({ score: gamemode === 2 ? (errorFound ? score : score + 1) : score });

            return !errorFound;
        },
        isGameOver: (gamemode, playerCards) => {
            const { nbErrors } = get();
            if (gamemode === 2) {
                return nbErrors > 2;
            }
            return playerCards.length === 0;
        }
    }
}));