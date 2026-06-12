import { create } from "zustand";
import type { CardStore } from "./card.types";
import data from '../../script/data.json';
import type { Card } from "../../types/card";

export const useCardStore = create<CardStore>((set, get) => ({
    cards: [],
    status: "idle",
    actions: {
        loadCards: () => {
            set(() => ({status: "loading"}));
            // console.log(data);
            const formattedData: Card[] = Object.create(
                data.map((c, idx) => {
                    const card = {};
                    Object.defineProperties(card, {
                        id: {value: idx},
                        season: {value: c.Season},
                        player: {value: c.Player},
                        team: {value: c.Tm},
                        pointsPerGame: {value: c.PTS},
                        reboundsPerGame: {value: c.TRB},
                        assistsPerGame: {value: c.AST},
                        image: {value: c.Image}
                    })
                    return card as Card;
                })
            );
            console.log(formattedData);
            set(() => ({status: "success"}));
            set(() => ({cards: formattedData}));
            return formattedData;
        },
        generatePlayerCards: (nbCards: number) => {
            const {actions} = get();
            return actions.rerollDuplicateCards(actions.randomizeCards(nbCards)) as Card[];
        },
        rollRandomCard: () => {
            const {cards} = get();
            return cards.at(Math.ceil(Math.random() * (cards.length - 1))) as Card;
        },
        randomizeCards: (nbCards: number) => {
            const {actions} = get();
            const randomCards = [];
            for (let i = 0; i < nbCards; i++) {
                randomCards[i] = actions.rollRandomCard();
            }
            return randomCards.filter((key, value) => value != undefined) as Card[];
        },
        setNbCardsFromDifficulty: (difficulte: number) => {
            return 5 + 2 * difficulte;
        },
        rerollDuplicateCards: (currentCards: Card[]) => {
            const {cards, actions} = get();
            while (cards.find((c) => c === currentCards.at(c.id)) !== null) {
                return actions.randomizeCards(currentCards.length);
            }
        }
    }
}))