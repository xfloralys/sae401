import type { Card } from "../../types/card.ts";
import type { CardOrder } from "../../types/cardOrder.ts";

export type CardOrderStore = {
    cardOrder: CardOrder | null,
    currentTimeline: (string | null)[],
    actions: CardOrderActions
}

export type CardOrderActions = {
    generateCardOrder: (givenCards: Card[]) => void,
    initTimeline: () => void,
    setCardAt: (card: Card, slotIdx: number) => void
}