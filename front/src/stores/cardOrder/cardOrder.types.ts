import type { Card } from "../../types/card.ts";
import type { CardOrder } from "../../types/cardOrder.ts";

export type CardOrderStore = {
    cardOrder: CardOrder | null,
    currentTimeline: (string | null)[],
    nbErrors: number,
    score: number,
    actions: CardOrderActions
}

export type CardOrderActions = {
    generateCardOrder: (givenCards: Card[]) => void,
    initTimeline: (cards: Card[]) => void,
    tryToSetCardAt: (playerCards: Card[], gamemode: number, card: Card, slotIdx: number) => boolean | void,
    isOrderCorrect: (gamemode: number, newTimeline: (string | null)[]) => boolean,
    isGameOver: (gamemode: number, playerCards: Card[]) => boolean
}