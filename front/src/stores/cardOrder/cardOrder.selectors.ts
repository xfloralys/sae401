import { useCardStore } from "../card/useCardStore";
import { useCardOrderStore } from "./useCardOrderStore";

export const useCurrentTimeline = () => useCardOrderStore((state) => state.currentTimeline);
export const useCardOrder = () => useCardOrderStore((state) => state.cardOrder);
export const useCardOrderActions = () => useCardOrderStore((state) => state.actions);
export const useNbErrors = () => useCardOrderStore((state) => state.nbErrors);
export const useScore = () => useCardOrderStore((state) => state.score);

export const useCardsBySlot = () => {
  const cards = useCardStore((state) => state.cards);
  const currentTimeline = useCurrentTimeline();
  return currentTimeline.map((id) => {
    if (id === null) return null;
    return cards.find((c) => c.id === Number.parseInt(id)) || null;
  });
};