import type { Card } from "../../types/card.ts";

export type CardStore = {
    cards: Card[],
    status: ("idle" | "loading" | "success" | "error"),
    actions: CardActions
}

export type CardActions = {
    loadCards: () => void,
    generatePlayerCards: (nbCards: number, availableCards: Card[]) => Card[],
    rollRandomCard: (availableCards: Card[]) => Card;
    randomizeCards: (nbCards: number, availableCards: Card[]) => Card[],
    setNbCardsFromDifficulty: (difficulte: number) => number,
    rerollDuplicateCards: (currentCards: Card[], availableCards: Card[]) => Card[] | undefined,
    addRandomCard: (currentCards: Card[]) => (Card | undefined)[];
}