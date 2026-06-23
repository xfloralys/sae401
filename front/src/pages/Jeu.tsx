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
import FinDuJeu from "../components/timeline/FinDuJeu";

const Jeu = () => {
   const {cards} = useCardStore();
   const cardsBySlot = useCardsBySlot();
   const {generatePlayerCards, setNbCardsFromDifficulty, addRandomCard} = useCardActions();
   const {generateCardOrder, initTimeline, tryToSetCardAt, isGameOver} = useCardOrderActions();
   const {currentTimeline, nbErrors, score} = useCardOrderStore();
   const [isTimelineInitiated, setIsTimelineInitiated] = useState(false);
   const [playerCards, setPlayerCards] = useState<Card[]>([]);
   const [searchParams] = useSearchParams();

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
      const errorFound = tryToSetCardAt(playerCards, getParamValue("mode"), card, slotIndex);
      console.log(errorFound);
      setPlayerCards(playerCards.filter((card) => availableCards.includes(card)));
      // Mode classique
      if (getParamValue("mode") === 1) { setPlayerCards(!errorFound ? addRandomCard(playerCards).filter((c) => c !== undefined) : playerCards) }
      // Mode challenge
      if (getParamValue("mode") === 2) { setPlayerCards(addRandomCard(playerCards).filter((c) => c !== undefined)) }
   };

   return (
      <DndProvider backend={backend}>
         <Header/>
         <main className="container mx-auto p-4">
            <section className="grid gap-4">
               {/* Timeline */}
               {/* <h4>La timeline</h4> */}
               <div className="h-full overflow-y-auto grid grid-rows-[repeat(auto-fit,minmax(10rem,1fr))] justify-items-center items-center gap-4 gap-y-10 sm:grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] sm:grid-rows-none"> {/* DESKTOP : grid grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] justify-items-center items-center gap-4 gap-y-8 */}
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
               {!isGameOver(getParamValue("mode"), visiblePlayerCards) &&
               <>
                  <h2>Cartes à placer</h2>
                  {getParamValue("mode") === 2 && <p className="w-full text-center">Essais restants : {3 - nbErrors}</p>}
                  <div className=" grid grid-flow-col grid-cols-[repeat(auto-fit,minmax(180px,1fr))] justify-items-center overflow-x-auto">
                     {visiblePlayerCards.map((c, idx) => (
                        <DraggableCard key={idx} card={c}
                     />))}
                  </div>
               </>
               }

               {isGameOver(getParamValue("mode"), visiblePlayerCards) && 
               <>
                  <FinDuJeu
                     getParamValue={getParamValue}
                     score={score}
                     nbErrors={nbErrors}
                  ></FinDuJeu>
               </>
               }
            </section>
         </main>
         <Footer/>
      </DndProvider>
   )
} 

export default Jeu;