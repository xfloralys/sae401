import { useSearchParams } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useCardActions } from "../stores/card/card.selectors";
import { useCardStore } from "../stores/card/useCardStore";
import { useCardOrderActions, useCardsBySlot } from '../stores/cardOrder/cardOrder.selectors';
import DraggableCard from "../components/timeline/DraggableCard";
import DroppableZoneGame from "../components/timeline/DroppableZoneGame";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import type { Card } from "../types/card";
import { useMemo, useState } from "react";
import { useCardOrderStore } from "../stores/cardOrder/useCardOrderStore";

const Jeu = () => {
   const {cards} = useCardStore();
   const cardsBySlot = useCardsBySlot();
   const {generatePlayerCards, setNbCardsFromDifficulty} = useCardActions();
   const {generateCardOrder, initTimeline, setCardAt} = useCardOrderActions();
   const {currentTimeline} = useCardOrderStore();
   const [isTimelineInitiated, setIsTimelineInitiated] = useState(false);
   const [playerCards, setPlayerCards] = useState<Card[]>([]);
   const [searchParams, setSearchParams] = useSearchParams();

   // Récupération des paramètres de l'URL
   const getParamValue = (key: string) => {
      const str = searchParams.get(key) as string;
      return Number.parseInt(str.charAt(5));
   }

   // Initialisation du jeu
   if (!isTimelineInitiated) {
      initTimeline(cards);
      generateCardOrder(cards);
      setPlayerCards(generatePlayerCards(setNbCardsFromDifficulty(getParamValue("diff")), cards));
      setIsTimelineInitiated(true);
   }

   // Actualisation de la main du joueur suite à un drop
   const availableCards = useMemo(() => cards.filter((card) => !currentTimeline.includes(card.id.toString())), [cards, currentTimeline]);
   const visiblePlayerCards = useMemo(() => playerCards.filter(card => availableCards.includes(card)), [playerCards, availableCards]);

   // Gestion Drag and Drop
   const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
   const backend = isTouchDevice ? TouchBackend : HTML5Backend;
   const handleDropCard = (
      card: Card,
      slotIndex: number
   ) => {
      setCardAt(card, slotIndex);
      setPlayerCards(playerCards.filter((card) => availableCards.includes(card)));
   };

   return (
      <DndProvider backend={backend}>
         <Header/>
         <main className="container mx-auto p-4">
            <section className="grid gap-4">
               <h2>À vous de jouer - Placez les cartes dans l'ordre correct !</h2>

               {/* Timeline */}
               <h2>La timeline</h2>
               <div className=" grid grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] justify-items-center items-center gap-4 gap-y-8">
                  {cardsBySlot.map((c, idx) => (
                     <DroppableZoneGame
                        key={idx}
                        slotIndex={idx}
                        card={c}
                        onDropCard={handleDropCard}
                     />
                  ))}
               </div>

               {/* Cartes à placer */}
               <h2>Cartes à placer</h2>
               <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] justify-items-center gap-6">
                  {visiblePlayerCards.map((c, idx) => (
                     <DraggableCard key={idx} card={c}
                  />))}
               </div>
            </section>
         </main>
         <Footer/>
      </DndProvider>
   )
} 

export default Jeu;