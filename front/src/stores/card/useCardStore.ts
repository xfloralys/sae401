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
                data.map((c, idx) => [idx, c.Season, c.Player, c.Tm, c.PTS, c.TRB, c.AST, c.Image])
            );
            // console.log(formattedData);
            set(() => ({status: "success"}));
            set(() => ({cards: formattedData}));
            return formattedData;
        },
        randomizeCards: (nbCards: number) => {
            const {cards} = get();
            const randomCards = [];
            for (let i = 0; i < nbCards; i++) {
                randomCards[i] = cards.at(Math.ceil(Math.random() * (cards.length - 1)))
            }
            return randomCards.filter((key, value) => value != undefined) as Card[];
        }
    }
}))