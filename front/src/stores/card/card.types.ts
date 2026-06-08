import type { Card } from "../../types/card.ts";

export type CardStore = {
    cards: Card[],
    status: ("idle" | "loading" | "success" | "error"),
    actions: CardActions
}

export type CardActions = {
    loadCards: () => void,
    randomizeCards: (nbCards: number) => Card[];
}