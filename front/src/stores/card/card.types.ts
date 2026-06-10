import type { Card } from "../../types/card.ts";

export type CardStore = {
    cards: Card[],
    status: ("idle" | "loading" | "success" | "error"),
    actions: CardActions
}

export type CardActions = {
    loadCards: () => void,
    generatePlayerCards: (nbCards: number) => Card[],
    rollRandomCard: () => Card;
    randomizeCards: (nbCards: number) => Card[],
    setNbCardsFromDifficulty: (difficulte: number) => number,
    rerollDuplicateCards: (currentCards: Card[]) => Card[] | undefined;
}