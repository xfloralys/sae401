import { useCardStore } from "./useCardStore";

export const useCards = () => useCardStore((state) => state.cards);
export const useCardsStatus = () => useCardStore((state) => state.status);
export const useCardActions = () => useCardStore((state) => state.actions);
export const useCardsCount = () => useCardStore((state) => state.cards.length);