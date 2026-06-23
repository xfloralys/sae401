import { create } from "zustand";
import type { CardStore } from "./card.types";
import data from '../../script/data.json';
import type { Card } from "../../types/card";
import { useCardOrderStore } from "../cardOrder/useCardOrderStore";

export const useCardStore = create<CardStore>((set, get) => ({
    cards: [],
    status: "idle",
    actions: {
        loadCards: () => {
            set(() => ({ status: "loading" }));
            // console.log(data);
            const formattedData: Card[] = Object.create(
                data.map((c, idx) => {
                    const card = {};
                    Object.defineProperties(card, {
                        id: { value: idx },
                        season: { value: c.Season },
                        playerFirstName: { value: c.PlayerFirstName },
                        playerLastName: { value: c.PlayerLastName },
                        team: { value: c.Tm },
                        pointsPerGame: { value: c.PTS },
                        reboundsPerGame: { value: c.TRB },
                        assistsPerGame: { value: c.AST },
                        image: { value: c.Image },
                        altText: { value: c.AltText }
                    })
                    return card as Card;
                })
            );
            console.log(formattedData);
            set(() => ({ status: "success" }));
            set(() => ({ cards: formattedData }));
            return formattedData;
        },
        generatePlayerCards: (nbCards: number, availableCards: Card[]) => {
            const { actions } = get();
            return actions.rerollDuplicateCards(actions.randomizeCards(nbCards, availableCards), availableCards) as Card[];
        },
        rollRandomCard: (availableCards: Card[]) => {
            return availableCards.at(Math.ceil(Math.random() * (availableCards.length - 1))) as Card;
        },
        randomizeCards: (nbCards: number, availableCards: Card[]) => {
            const result: Card[] = [];

            const pool = [...availableCards];

            for (let i = 0; i < nbCards && pool.length > 0; i++) {
                const index = Math.floor(Math.random() * pool.length);
                result.push(pool.splice(index, 1)[0]);
            }

            return result;
        },
        setNbCardsFromDifficulty: (difficulte: number) => {
            return 5 + 2 * difficulte;
        },
        rerollDuplicateCards: (currentCards: Card[], availableCards: Card[]) => {
            const { actions } = get();
            let tempArray = [...new Set(currentCards)];
            while (tempArray.length < currentCards.length) {
                tempArray = [...new Set(actions.randomizeCards(currentCards.length, availableCards))];
            }
            return tempArray;
        },
        addRandomCard: (currentCards: Card[]) => {
            const { cards } = get();
            const { currentTimeline } = useCardOrderStore.getState();
            const availableCards = cards.filter((card) => !currentTimeline.includes(card.id.toString())).filter((card) => !currentCards.includes(card));
            return [...currentCards, availableCards.at(Math.floor(Math.random() * (availableCards.length - 1)))];
        }
    }
}))