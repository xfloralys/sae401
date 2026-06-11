import { useCardOrderStore } from "./useCardOrderStore";

export const useCardOrder = () => useCardOrderStore((state) => state.cardOrder);
export const useCardOrderActions = () => useCardOrderStore((state) => state.actions);