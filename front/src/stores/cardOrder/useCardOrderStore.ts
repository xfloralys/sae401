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
            const generatedOrder: Card[] = Object.create(
                [...cards.sort((a, b) => seasons[a.id] - seasons[b.id])]
            );
            set({cardOrder: {
                id: 0,
                order: generatedOrder
            }});
        },
        initTimeline: (cards) => {
            set({currentTimeline: [null, Math.floor((Math.random() * cards.length - 1)).toString(), null]});
        },
        tryToSetCardAt: (playerCards, gamemode, card, slotIdx) => {
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
            const errorFound: boolean = isOrderCorrect(playerCards, gamemode, updated);
            set({currentTimeline:  errorFound ? updated : currentTimeline});
            return errorFound;
        },
        isOrderCorrect: (playerCards, gamemode, newTimeline) => {
            // const {addRandomCard} = useCardStore.getState().actions;
            const {nbErrors, score} = get();
            let errorFound = false;
            const iterable = [...newTimeline.filter((c) => c !== null)];
            iterable.map((cardId, idx) => {
                const tempCardId = cardId;
                const tempNextCardId = iterable[idx + 1];
                if ((idx + 1 < iterable.length) && !errorFound) {
                    errorFound = Number.parseInt(tempCardId) < Number.parseInt(tempNextCardId) ? true : false;
                }
            });

            // Mode classique - s'il y a une erreur
            set({nbErrors: gamemode === 1 ? (errorFound ? nbErrors + 1 : nbErrors) : nbErrors});
            // Mode challenge - si le placement est correct, le joueur gagne un point
            set({score: gamemode === 2 ? (errorFound ? score : score + 1) : score});

            return errorFound ? false : true;
        },
        isGameOver: (gamemode, playerCards) => {
            const {nbErrors} = get();
            // Mode challenge - trois erreurs et c'est terminé
            if (gamemode === 2) {
                return nbErrors > 2 ? true : false;
            }
            return playerCards.length === 0 ? true : false;
        }
    }
}))